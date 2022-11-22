const Chart = require("../models/diet_chart_schema.js");
const axios = require("axios");

exports.displayfooditems = async (req, res) => {

  let foodItems

  if(req.params.target == "gain"){
    foodItems = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.API_KEY}&minCalories=1000`)
  }
  if(req.params.target == "lose"){
    foodItems = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.API_KEY}&minCalories=500`)
  }
  if(req.params.target == "maintain"){
    foodItems = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.API_KEY}&minCalories=800`)
  }
  res.status(200).json(foodItems.data)
};
