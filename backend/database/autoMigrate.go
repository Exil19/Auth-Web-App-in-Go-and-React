package database

import (
	"authapp/models"
	"log"
)

func MigrateModels() {
	if err := DB.AutoMigrate(&models.User{}); err != nil {
		log.Fatalf("Failed to migrate user: %v", err)
	}
}
