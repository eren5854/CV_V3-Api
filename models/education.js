const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
    _id: String,
    title: String,
    faculty: String,
    degree: String,
    date: String
});

const Education = mongoose.model("Education", educationSchema);
module.exports = Education;