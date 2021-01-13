const { promises } = require('fs');
const http = require('http');

const url = 'well-bank.herokuapp.com'

var options = {
    hostname: url,
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
                reject(404)
            })
        })

        request.write(data)
        request.end()

    })
}

class wellBankController {
    deposito(info) {
        const data = JSON.stringify({
            "usuario": info.nome,
            "valor": info.valor
        })

        console.log(info.usuario, info.valor)
        options.method = 'POST'
        options.path = '/deposito'

        return httpRequest(data)
    }
}

module.exports = new wellBankController() 