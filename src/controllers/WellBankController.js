const http = require('http');

var options = {
    hostname: 'well-bank.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
    }
}

function httpRequest(data) {
    return new Promise((resolve, reject) => {
        const request = http.request(options, response => {
            response.on('data', d => {
                resolve(response.statusCode)
            })

            response.on('error', error => {
                console.error(error)
                reject(400)
            })
        })

        request.write(data)
        request.end()
    })
}

class wellBankController {
    deposito(info) {
        const data = JSON.stringify({
            usuario: info.usuario,
            valor: info.valor
        })

        options.method = 'POST'
        options.path = '/deposito'

        return httpRequest(data)
    }

    saque(info) {
        const data = JSON.stringify({
            usuario: info.usuario,
            valor: info.valor
        })

        options.method = 'POST'
        options.path = '/saque'

        return httpRequest(data)
    }

    pagamento(info) {
        const data = JSON.stringify({
            usuaro: info.usuario,
            valor: info.valor,
            codigo: info.codigo
        })

        options.method = 'POST'
        options.path = '/pagamento'

        return httpRequest(data)
    }

    transferencia(info) {
        var data
        if (info.banco_debito == 'well-bank') {
            data = JSON.stringify({
                usuario: info.usuario,
                valor: info.usuario
            })
        }
        else {
            data = JSON.stringify({
                conta_credito: info.conta_credito,
                valor: info.usuario
            })
        }

        options.mathod = 'POST'
        options.path = '/transferencia'

        return httpRequest(data)
    }
    info(info) {
        const data = JSON.stringify({
            usuario: info.usuario
        })

        options.method = 'GET'
        options.path = '/info'

        return httpRequest(data)
    }
}

module.exports = new wellBankController() 