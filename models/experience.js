const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    _id: String,
    title: String,
    subTitle: String,
    date: String,
    description: String
});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;