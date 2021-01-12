const { promises } = require('fs');
const http = require('http');

const url = 'oxente-bank.herokuapp.com'

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
        })

        request.on('error', error => {
            console.error(error)
            reject(404)
        })

        request.write(data)
        request.end()
    })
}

class OxenteBankController {
    deposito({ banco, valor }) {
        const data = JSON.stringify({
            "usuario_id": 1,
            "valor": valor
        })

        options.method = 'POST'
        options.path = '/deposito'

        return httpRequest(data)
    }
}

module.exports = new OxenteBankController()