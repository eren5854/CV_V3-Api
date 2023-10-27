const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  mediaSchema = new Schema({
    _id: String,
    title: String,
    link: String,
    icon: String
});

const Media = mongoose.model("Media", mediaSchema);
module.exports = Media;