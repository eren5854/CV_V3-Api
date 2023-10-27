const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    userName: String,
    userTitle: String,
    userAbout: String,
    userPhone: String,
    userEmail: String,
    userAddress: String
});

const User = mongoose.model("User", userSchema);
module.exports = User;