var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Apar',
        text: 'Hi!! Brother'
    });
});

socket.on('newMessage', function(message) {
    console.log('new Message', message);
})

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});