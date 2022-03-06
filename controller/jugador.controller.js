const ctrlJugador = {}
jugadores = require('../model/jugador')
 
ctrlJugador.create = async(req, res) =>{
    const { name, position, team, numero } = req.body
    const newJugador = new jugadores({
        name: name,
        position: position,
        team : team,
        numero : numero
    })
    await newJugador.save()
    //res.json({ status: true })
    res.json(jugadores)
}

ctrlJugador.get = async(req, res) =>{
   const jugador = await jugadores.find({})
   res.json(jugador)
}

ctrlJugador.findById = async(req, res) =>{
    console.log( req.params._id )
    const jugador = await jugadores.find({ _id: req.params._id})
    res.json(jugador)
}

ctrlJugador.remove = async(req, res) =>{
    console.log(req.params._id);
    await jugadores.deleteOne({ _id: req.params._id })
    res.json({ status: true})
}

ctrlJugador.update = async (req, res) => {
    console.log( req.body  )
    const {_id, name, position, team, numero} = req.body 
    let toUpdate = { name:name, position: position, team: team, numero: numero}
    await jugadores.findOneAndUpdate({_id:_id}, toUpdate)
    res.json({status: true})
 }

 ctrlJugador.search = async(req, res)=>{
    const { name } = req.body
    const jugador = await jugadores.find({ name : { $regex: ".*" + name + ".*" } })
    res.json(jugador)
 }


module.exports = ctrlJugador