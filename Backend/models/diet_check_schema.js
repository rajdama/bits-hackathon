const mongoose = require('mongoose')

const dietCheckSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    dayCheck:[{type:Boolean, required: true}],
},{timestamps : true})

module.exports = mongoose.model('Check', dietCheckSchema)