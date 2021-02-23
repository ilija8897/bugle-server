const MessageModel = require('./db.js');

module.exports = function(io) {
    io.on('connection', client => {
        client.on('send_message', data => {
            const messageData = {
                data: new Date(),
                text: data,
                user: client.id
            }
            console.log('DB Create');
            MessageModel.create(messageData, err => {
                err && console.log(err);
                io.emit('add_message', {id: client.id, message: data});
            });
        });
    });
}