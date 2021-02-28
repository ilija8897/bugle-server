const MessageModel = require('./db.js').MessageModel;

module.exports = function(io) {
    io.on('connection', client => {
        client.on('send_message', data => {
            const messageData = {
                date: new Date(),
                text: data,
                user: client.id
            }
            MessageModel.create(messageData, err => {
                err && console.log(err);
                io.emit('add_message', {id: client.id, message: data});
            });
        });
        client.on('messages_history', () => {
            MessageModel.find({}).sort({date: -1}).limit(100).sort({date: 1}).lean().exec((err, messages) => {
                io.emit('push_history', messages);
            })
        })
    });
}