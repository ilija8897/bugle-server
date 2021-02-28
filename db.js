const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    date: {type: Date},
    text: {type: String},
    user: {type: String},
});

const UserSchema = new Schema({
    username: {type: String},
    email: {type: String},
    password: {type: String},
    // chats: {type: Array},
});

module.exports = {
    MessageModel: mongoose.model('MessageModel', MessageSchema),
    UserModel: mongoose.model('UserModel', UserSchema),
}