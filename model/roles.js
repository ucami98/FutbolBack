const mongoose = require('mongoose')

const rolesShema = new mongoose.Schema({
    name:{ type:String, lowercase:true},
})

module.exports = mongoose.model('roles', rolesShema)