const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://ravibala-13:bals1999@cluster0.hfo0i.mongodb.net/user_details");
};

module.exports = connect;