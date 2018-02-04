const noExchange = Promise.resolve(1)

const calculate = (stock, product) => {
    const price = stock.price + product.price
    const cost = stock.cost + product.cost
    const gain = price - cost
    return {
        price,
        cost,
        gain
    }
}

const emptyStock = {
    cost: 0.0,
    price: 0.0,
    gain: 0.0
}

const stock = (find, exchanger, code, currency) => {
    const _exchanger = currency&&("USD"!=currency) ? exchanger(currency) : noExchange

    const stock = find(code)
        .then(products => products.reduce(calculate, emptyStock))

    return Promise
        .all([stock, _exchanger])
        .then(([{
            price,
            cost,
            gain
        }, rate]) => {
            return {
                price: price * rate,
                cost: cost * rate,
                gain: gain * rate,
            }
        })
}

module.exports = {
    stock
}