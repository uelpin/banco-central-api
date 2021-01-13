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
}

module.exports = new wellBankController() 