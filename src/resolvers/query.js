const {find} = require('../mongoose')
const domain = require('../domain/stock')
const exchanger = require('../exchanger')

const products = ({
    code
}) => {
    return find(code)
}

const stock = ({
    code,
    currency
}) => {
    return domain.stock(find,exchanger,code,currency)
}

module.exports = {
    products,
    stock
}