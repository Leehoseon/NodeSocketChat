module.exports = (io) => {

  io.on('connection', (socket) => {

    console.log('a user connected');

    socket.on('chat message', (name,msg) => {
      io.emit('chat message', name,msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
  });
  
  io.listen(3000, () => {
    console.log('Connected at 3000');
  });
  
}

