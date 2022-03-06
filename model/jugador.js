const mongoose = require('mongoose')//libreria para conectarse con mongodb

const jugadoresSchema= new mongoose.Schema({
    name: String,
    position: String,
    team: String,
    numero: Number,
})

module.exports =  mongoose.model('jugadores', jugadoresSchema )