const OxenteBankController = require('../controllers/OxenteBankController')

const bankNames = [
    'oxente-bank',
    'well-bank',
    'coffebank',
]

class BankController {
    deposito(req, res) {
        const { usuario, banco, valor } = req.body

        //validação

        switch (banco) {
            case bankNames[0]:
                OxenteBankController.deposito(req, res)
                break;
            default:
                res.status(404).json({ message: 'Bank not found' })
                break;
        }

    }
}

module.exports = new BankController()
