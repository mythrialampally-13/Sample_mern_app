let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String,
   role:String

});

let users = mongoose.model('users', userSchema);

module.exports = users;