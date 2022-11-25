const Chart = require("../models/diet_chart_schema.js");
const axios = require("axios");

exports.displayfooditems = async (req, res) => {

  // if(req.params.target == "gain"){
  //   foodItems = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.API_KEY}&minCalories=1000&diet=vegetarian`)
  // }
  // if(req.params.target == "lose"){
  //   foodItems = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.API_KEY}&minCalories=500`)
  // }
  // if(req.params.target == "maintain"){
  //   foodItems = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.API_KEY}&minCalories=800`)
  // }
  const result = await axios.get(`https://api.edamam.com/search?q=${req.params.foodTitle}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
  if(result.status==200){
    res.status(200).json(result.data)
  }
};

exports.makechart = async (req, res) => {

  const {chartData, userId} = req.body;
  console.log(chartData, userId)
  // console.log(chartData);

  const period = (cell, diet, chartData,i,j)=>{
    if(cell.charAt(0)=="0"){
      const period = "Breakfast";
      const food = chartData[i].food;
      diet[j].push({period, food, cell})
    }
    if(cell.charAt(0)=="1"){
      const period = "Lunch";
      const food = chartData[i].food;
      diet[j].push({period, food, cell})
    }
    if(cell.charAt(0)=="2"){
      const period = "Snacks";
      const food = chartData[i].food;
      diet[j].push({period, food, cell})
    }
    if(cell.charAt(0)=="3"){
      const period = "Dinner";
      const food = chartData[i].food;
      diet[j].push({period, food, cell})
    }
  }

  let diet = [[],[],[],[],[],[],[]]
  for (let i = 0; i < chartData.length; i++) {

    const cell = chartData[i].cell;

    if(cell.charAt(1)=="0"){
      period(cell, diet, chartData,i,0)
    }

    if(cell.charAt(1)=="1"){
      period(cell, diet, chartData,i,1)
    }

    if(cell.charAt(1)=="2"){
      period(cell, diet, chartData,i,2)
    }

    if(cell.charAt(1)=="3"){
      period(cell, diet, chartData,i,3)
    }

    if(cell.charAt(1)=="4"){
      period(cell, diet, chartData,i,4)
    }

    if(cell.charAt(1)=="5"){
      period(cell, diet, chartData,i,5)
    }

    if(cell.charAt(1)=="6"){
      period(cell, diet, chartData,i,6)
    }
  }

  for (let i = 0; i < diet.length; i++) {
    const day = i==0?String("Monday"):i==1?String("Tuesday"):i==2?String("Wednesday"):i==3?String("Thursday"):i==4?String("Friday"):i==5?String("Saturday"):String("Sunday")
    const _chart = new Chart({
      day,
      diet: diet[i],
      userId
    });
    _chart.save((error, data) => {
      if (error) {
        console.log(error);
        return res.status(400).json({ message: error });
      }
    });
  }
};

exports.getchart = async (req, res) => {
  const {userId} = req.body;
  const chart = await Chart.find({userId});
  // chart.map((item)=>{

  // })
  // console.log(chart.length)
  res.send(chart);
}