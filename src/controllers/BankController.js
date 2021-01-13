const OxenteBankController = require('../controllers/OxenteBankController')
const wellBankController = require('../controllers/WellBankController')
const NiggaBankController = require('./NiggaBankController')

const bankNames = [
    'oxente-bank',
    'well-bank',
    'nigga-bank'
]

const depositFunctions = [
    OxenteBankController.deposito,
    wellBankController.deposito,
    NiggaBankController.deposito
]

class BankController {
    async deposito(req, res) {
        const index = bankNames.indexOf(req.body.banco)

        if (index == -1) res.status(404).json({ message: "Banco não encontrado", status: 404 })

        let statusCode = await depositFunctions[index](req.body)

        res.status(200)
        if (statusCode == 200) {
            res.json({ message: "Depositado com sucesso", status: statusCode })
        } else {
            res.json({ message: "Houve um erro", status: statusCode })
        }
    }
}

module.exports = new BankController()
