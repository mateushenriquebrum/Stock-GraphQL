var fetch = require('node-fetch');

const  exchanger = (to, based = 'USD') => {
    var url = `https://api.fixer.io/latest?base=${based}`
    return fetch(url)
        .then(res => res.json())
        .then(({ rates }) => rates)
        .then(rates => rates[to])
}

module.exports = exchanger