const mongoose = require("mongoose") 
const jacketSchema = mongoose.Schema({
    
    
        name: String,
        brand:  String,
        price: Number
}) 
 
module.exports = mongoose.model("jacket", jacketSchema)