const mongoose = require('mongoose');
const url = "mongodb+srv://cherr:Whatamidoing1231@cluster0.cbveo.mongodb.net/knowhow?retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose.connect(url)
    .then((res) => console.log("MongoDB is connected"))
    .catch((err) => console.log("Error:", err));
}