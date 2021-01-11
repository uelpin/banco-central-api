const http = require('http');

const url = 'oxente-bank.herokuapp.com'

class OxenteBankController {
    deposito(req, res) {
        http.request({
            host: url,
            path: '/deposito',
            headers: req.body,
        }, (callback) => {
            console.log(callback.statusCode)

            res.status(callback.statusCode)
            if (callback.statusCode === 200) {
                res.json({ message: 'Deposito concluído com sucesso em Oxente Bank' })
            } else {
                res.json({ message: 'Erro ao fazer o depósito' })
            }
        })

    }
}

module.exports = new OxenteBankController()