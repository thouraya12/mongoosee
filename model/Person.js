const mongoose = require('mongoose')
const personSchema = new mongoose.Schema({
    name:{
        type:String,

    },
    age:{
        type:Number
    },
    favoritrFoods:{
        type:[String]

    }

})
const Person =mongoose.model('person',personSchema)
module.exports =Person