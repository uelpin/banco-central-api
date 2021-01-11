const express = require('express')
const router = express.Router()
const BankController = require('../controllers/BankController')

router.post('/deposito', BankController.deposito)
// router.post('/saque', BankController.saque)
// router.post('/transferencia', BankController.transferencia)
// router.get('/movimento/:banco/:usuario', BankController.getMovimento)
// router.get('/usuario/:banco', BankController.getUsuario)
// router.get('/banco', BankController.getBancos)


module.exports = router