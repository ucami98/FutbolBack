//permisos de cada tipo de usuario
const mongoose = require('mongoose')//libreria para conectarse con mongodb

const moduloSchema= new mongoose.Schema({
    modulo: {type:String, lowercase:true},
    submodulos:[
        {name:String,
        opciones:[
            {name:String}
        ]}
    ] ,
    
})

module.exports =  mongoose.model('modulo', moduloSchema )