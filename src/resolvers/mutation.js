const {
    remove,
    create
} = require('../mongoose')

const createProduct = (args) => {
    return create(args)
}

const removeProduct = ({
    code
}) => {
    return remove(code)
}

module.exports = {
    createProduct,
    removeProduct
}