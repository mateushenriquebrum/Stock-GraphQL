const {find} = require('../mongoose')
const domain = require('../domain/stock')

const products = ({
    code
}) => {
    return find(code)
}

const stock = ({
    code,
    currency
}) => {
    return domain.stock(find)
}

module.exports = {
    products,
    stock
}