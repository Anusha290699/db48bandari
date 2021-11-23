const mongoose = require("mongoose") 
const jacketSchema = mongoose.Schema({
    
    name:{
    type: String,
    minLength: 3,
    maxLength: 50
},

brand : String,

price: {
    type:Number,
    min:1,
    max:200
}
})
 
module.exports = mongoose.model("jacket", jacketSchema)