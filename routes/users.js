const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dbname")
    .then(function() {
        console.log("connected to db");
    })

var userSchema = mongoose.Schema({
    name: String,
    profession: String,
    dpimage: String,

})

module.exports = mongoose.model("user", userSchema)