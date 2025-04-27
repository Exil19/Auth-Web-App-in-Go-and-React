package main

import (
	"authapp/config"
	"authapp/database"
	"authapp/routes"

	"github.com/gin-gonic/gin"
)

func init() {
	config.LoadEnvVariables()
	database.ConnectToDB()
	database.MigrateModels()
}

func main() {
	r := gin.Default()
	
	routes.UserRoutes(r)
	r.Run("localhost:8080")
}
