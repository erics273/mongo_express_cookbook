//importing express and the built in router for express
const express = require('express')
const router = express.Router()

//bringing in our controller so our routes have code to runb
const recipeController = require("../controllers/recipe.controller")

//default get route that returns all recipes
router.get("/", recipeController.getRecipes)

module.exports = router;