//permisos de cada tipo de usuario
const mongoose = require('mongoose')//libreria para conectarse con mongodb

const roleUserSchema= new mongoose.Schema({
    rol: String,
    userId: String,
})

module.exports =  mongoose.model('roleUser', roleUserSchema )