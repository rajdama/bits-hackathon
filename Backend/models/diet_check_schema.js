const mongoose = require('mongoose')

const dayCheckSchema = new mongoose.Schema({
    period:{type: String, required: true},
    check:{type:Boolean, required: true},
})


const dietCheckSchema = new mongoose.Schema({
    day:{type: String, required: true},
    dayCheck:[dayCheckSchema],
},{timestamps : true})

module.exports = mongoose.model('Check', dietCheckSchema)