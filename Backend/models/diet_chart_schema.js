const mongoose = require('mongoose')

const cellSchema = new mongoose.Schema({
    period:[{type: String, required: true}],
    food:{type: Object, required: true},
    cell:{type: String, required: true},
})

const dietChartSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    day:{type: String, required: true},
    diet:[cellSchema],
},{timestamps : true})



module.exports = mongoose.model('Chart', dietChartSchema)