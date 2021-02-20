module.exports = function(io) {
    io.on('connection', client => {
        client.on('send_message', data => {
          io.emit('add_message', {id: client.id, message: data});
        });
    });
}