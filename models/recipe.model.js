//bring in mongoose so we can create a schema that represents the data for a Recipe
const mongoose = require("mongoose");

//Create our schema using mongoose that contains the fields and their data types for our Recipes
//More info: https://mongoosejs.com/docs/schematypes.html
const recipeSchema = new mongoose.Schema({
    name: String,
    author: {
        name: String,
        email: String
    },
    ingredients: [String],
    averageCost: String
})

//Generate the model our code with interact with from the above schema
//Models allow us to interact with the data inside our MongoDB collections
//More info: https://mongoosejs.com/docs/models.html
const recipe = mongoose.model('Recipe', recipeSchema);

//export our model
module.exports = recipe;