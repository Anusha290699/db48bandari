const mongoose = require("mongoose") 
const jacketSchema = mongoose.Schema({
    
    name: {
        type: String,
        minlength: 4
},
    brand: {
        type:  String,
        minLength: 2
},
    price: {
        type: String,
        minLength: 5
}
}) 
 
module.exports = mongoose.model("jacket", jacketSchema)