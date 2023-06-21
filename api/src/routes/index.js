const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getPokemon }  = require('../controllers/getPokemon')
const { getPokes }  = require('../controllers/getPokes.js')
const { getPokeName }  = require('../controllers/getPokeName.js')
const { postPoke }  = require('../controllers/postPoke.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokes', getPokes)
router.get('/pokes/:id', getPokemon)
router.get('/poke', getPokeName)
router.post('/poke', postPoke)

module.exports = router;
