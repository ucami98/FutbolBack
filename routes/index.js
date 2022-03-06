const { Router} = require('express'),

router = Router()

router.use('/jugadores', require('../routes/jugador.routes'))
router.use('/auth', require('../routes/auth.routes'))

module.exports = router