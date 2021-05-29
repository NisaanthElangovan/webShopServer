

module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('clientMsg', (data) => {
            socket.emit("clientMsg", {
                text: `Hi, 
                Thanks for contacting Customer Care!
                Due to huge traffic all our executives are busy.
                Please mail to webshop@gmail.com for quick response.`,
            });
            console.log('clientMsg', data);
        })

        socket.on('private_message', (data) => {
            console.log('private_message', data)
            io.to(data.receiver.socketId).emit('incoming_msg', data)
            socket.emit('ack', data)
        })
    });
}