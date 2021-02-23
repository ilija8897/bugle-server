const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    date: {type: Date},
    text: {type: String},
    user: {type: String},
});

module.exports = mongoose.model('MessageModel', MessageSchema);