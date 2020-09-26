var io= require("socket.io")(HttpError)

io.on('connection',(socket)=>{
      console.log('a user is connected');
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });