const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const referanceSchema = new Schema({
    _id: String,
    name: String,
    title: String,
    subTitle: String,
    phone: String,
    phoneIcon: String,
    email: String,
    emailIcon: String
});

const Referance = mongoose.model("Referance", referanceSchema);
module.exports = Referance;