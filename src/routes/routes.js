const express = require('express')
const router = express.Router()
const BankController = require('../controllers/BankController')

router.post('/saque', BankController.saque)
router.post('/deposito', BankController.deposito)
router.post('/pagamento', BankController.pagamento)
//router.post('/transferencia', BankController.transferencia)

// router.get('/movimento/:banco/:usuario', BankController.getMovimento)
// router.get('/usuario/:banco', BankController.getUsuario)
// router.get('/banco', BankController.getBancos)


module.exports = router