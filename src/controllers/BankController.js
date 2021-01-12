const OxenteBankController = require('../controllers/OxenteBankController')

const bankNames = [
    'oxente-bank',
]

const depositFunctions = [
    OxenteBankController.deposito,
]

class BankController {
    async deposito(req, res) {
        const { usuario, banco, valor } = req.body

        const index = bankNames.indexOf(banco)

        if (index == -1) res.status(404).json({ message: "Banco não encontrado", status: 404 })

        let statusCode = await depositFunctions[index]({ usuario, valor })

        res.status(200)
        if (statusCode == 200) {
            res.json({ message: "Depositado com sucesso", status: statusCode })
        } else {
            res.json({ message: "Houve um erro", status: statusCode })
        }
    }
}

module.exports = new BankController()
