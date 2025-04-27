package routes

import (
	"authapp/controllers"
	"authapp/middleware"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func UserRoutes(r *gin.Engine) {
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // сюда твой фронтенд адрес
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	user := r.Group("")
	{
		user.POST("/register", controllers.Register)
		user.POST("/login", controllers.Login)
	}

	protekted := r.Group("")
	protekted.Use(middleware.AuthMiddleware())
	{
		protekted.GET("/validate", controllers.Validate)
	}
}
