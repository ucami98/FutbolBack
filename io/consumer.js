exports.start = (io)=>{
    io.on("connection", (socket) => {
        console.log("user connected " + socket.id)
        
        socket.on("disconnect", () =>{
          console.log("user desconect " + socket.id);
        })
    
        socket.on('newcontact',(data)=>{
            console.log("llego ",data)
            io.sockets.emit('emitiendo', data)
        })
    })  
  };
  