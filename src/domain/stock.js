const emptyExchanger = Promise.resolve(1)

const stock = (products, code, exchanger = emptyExchanger) => {
    const stock = products(code)
    .then(products => {
        return products.reduce((stock, product) => {
            const price = stock.price + product.price
            const cost = stock.cost + product.cost
            const gain = price - cost
            return {
                price,
                cost,
                gain
            }
        }, {
            cost: 0.0,
            price: 0.0,
            gain: 0.0
        })
    })

    return Promise
    .all([stock,exchanger])
    .then(([{price,cost,gain},rate])=>{
        return {
            price : price*rate,
            cost : cost*rate,
            gain : gain*rate,
        }
    })
}

module.exports = {
    stock
}