const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    _id: String,
    title: String,
    logo: String
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;