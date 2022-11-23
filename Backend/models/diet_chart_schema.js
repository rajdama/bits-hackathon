const mongoose = require('mongoose')

const cellSchema = new mongoose.Schema({
    period:[{type: String, required: true}],
    food:{type: Object, required: true},
})

const dietChartSchema = new mongoose.Schema({
    day:{type: String, required: true},
    diet:[cellSchema],
},{timestamps : true})



module.exports = mongoose.model('Chart', dietChartSchema)