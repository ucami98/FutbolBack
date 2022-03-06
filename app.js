const express = require('express')
const Jugadores = require('./model/jugador')
    config = require('./config/config')
    app = express()
    bodyParser = require('body-parser')
    cors = require('cors')
    db = require('./db/db')
    consumer = require('./io/consumer')
    http = require('http').Server(app)
    io = require("socket.io")(http,{
        cors:{
            origins:['http://localhost:4200/']
        }
    })

    init = require('./init/init')

    
    //init.createRoles()
    //init.createUser()
    //init.createModules()
    //init.createAssignedModuleToRol()
    //init.createRolUser()

consumer.start(io)
http = require('http').Server(app)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use("/api", require('../back/routes/'))

http.listen(config.port, () => {
    console.log(`Server is running in port ${config.port}`);
    });

console.log(Jugadores)