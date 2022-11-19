const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 18,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 18,
    },
    userName:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        index:true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        index:true,
    },
    hash_password:{
        type:String,
        required:true
    },
},{timestamps : true})

userSchema.virtual('password')
    .set(function(password){
    this.hash_password = bcrypt.hashSync(password,10)
})

userSchema.virtual('fullName')
    .get(function(){
        return `${this.firstName} ${this.lastName}`
    })

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password)
    }
}

module.exports = mongoose.model('User', userSchema)