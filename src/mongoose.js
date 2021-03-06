const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CON || 'mongodb://localhost/store');

const Product = mongoose.model('Product', {
    code: Number,
    description: String,
    cost: Number,
    price: Number,
    stock: Number
});

const find = (code) => {
    if (code) {
        return Product.find({
            code
        })
    } else {
        return Product.find()
    }
}

const remove = (code) => {
    return Product.findOneAndRemove({
        code
    }).then(product => {
        const removed = product?true:false
        return {removed,product}
    })
}

const create = (product) => {
    return new Product(product).save()
}

module.exports = {
    find,
    remove,
    create
}