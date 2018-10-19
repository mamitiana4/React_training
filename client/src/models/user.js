var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function (callback, limit) {
    User.find(callback).limit(limit);
}

module.exports.getUser = function (id, callback) {
    User.findById(id, callback);
}

module.exports.addUser = function (user, callback) {
    User.create(user, callback);
}