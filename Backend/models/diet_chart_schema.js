const mongoose = require('mongoose')

const dietChartSchema = new mongoose.Schema({
    day:{type: String, required: true},
    period:{type: String, required: true},
    food:{type: String, required: true},
    image:{type: String, required: true},
    calories:{type: Number, required: true},
},{timestamps : true})

module.exports = mongoose.model('Chart', dietChartSchema)