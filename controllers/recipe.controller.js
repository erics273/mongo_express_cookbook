//Import our model so we can us it to interact with the realated data in MongoDB
const recipe = require("../models/recipe.model")


//build our controller that will have our CRUD methods for our recipes
const recipeController = {

    //method to get all recipes using async/await syntax
    getRecipes: async function(req, res){

        //using a try/catch since we are using asyn/await and want to catch any errors if the code in the try block fails
        try {
            
            //use our model to find recipes that match a query.
            //{} is the current query which really mean find all the recipes
            //we use await here since this is an async process and we want the code to wait for this to finish before moving on to the next line of code
            let allRecipes = await recipe.find({})
            
            //return all the recipes that we found in JSON format
            res.json(allRecipes)
            
        } catch (error) {

            //if any code in the try block fails, send the user a HTTP status of 400 and a message stating we could not find any recipes
            res.status(400).send("couldn't find your recipes: " + error)

        }
    }
    

}

module.exports = recipeController;
