var {
    buildSchema
} = require('graphql');

var schema = buildSchema(`
    type Product {
        code: Int!
        description: String!
        price: Float!
        cost: Float!
        stock: Int!
    }

    type Stock {
        price: Float!
        cost: Float!
        gain: Float!
    }

    type Mutation{
        createProduct(code: Int!, description: String!, price: Float!, cost: Float!, stock: Float!): Product!
        remoceProduct(code: Int!): Boolean!
    }

    type Query {
        products(code: Int): [Product!]!
        stock(code: Int, currency:String): Stock!
    }
`);

module.exports = schema