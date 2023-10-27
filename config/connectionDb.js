const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("MongoDB is Connect");
})
.catch((err)=>{
    console.log("ERROR!! MongoDB is not Connect!!");
})