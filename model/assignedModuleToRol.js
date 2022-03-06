//permisos de cada tipo de usuario
const mongoose = require('mongoose')//libreria para conectarse con mongodb

const assignedToRoleModuleSchema= new mongoose.Schema({
    rol: String,
    modulo:[
        {name:String}
    ] ,
    
})

module.exports =  mongoose.model('assignedToRoleModule', assignedToRoleModuleSchema )