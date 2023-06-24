const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getPokemon }  = require('../controllers/getPokemon')
const { getPokes }  = require('../controllers/getPokes.js')
const { getMyPokes }  = require('../controllers/getMyPokes.js')
const { getPokeName }  = require('../controllers/getPokeName.js')
const { postPoke }  = require('../controllers/postPoke.js')
const { getByType } = require('../controllers/getByType')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/type', getByType)
router.get('/pokes', getPokes, )
router.get('/myPokes', getMyPokes)
router.get('/poke/:id',  getPokemon)
router.get('/poke', getPokeName)
router.post('/poke', postPoke)

module.exports = router;
