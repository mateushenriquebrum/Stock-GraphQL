# GraphQLStoreApi

Simple Stock API in GraphQl and Node.js

## Instalation
```bash
$ export MONGODB_CONEST=<YOUR MONG DB CONNECTION>
$ git clone https://github.com/mateushenriquebrum/Stock-GraphQL
$ cd GraphQLStoreApi
$ npm install
$ npm start
```

This will run on localhost:4000

## Documentation

In your browser

### Add products
http://localhost:4000/?query=mutation{createProduct(code:234,description:"Coke",cost:8.99,stock:9,price:8.9){code,description,price,cost}}

### Remove products
http://localhost:4000/?query=mutation{removeProduct(code:234){removed,product{description,price,cost}}}

### Fetch all products
http://localhost:4000/?query={products{code,description,cost,price}}

### To see your stock
http://localhost:4000/?query={stock{gain,cost,price}}

### To see your stock with different currency
http://localhost:4000/?query={stock(currency:"BRL"){gain,cost,price}}

### To see just one product from stock with different currency
http://localhost:4000/?query={stock(currency:"BRL",code:234){gain,cost,price}}
