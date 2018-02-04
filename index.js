
var express = require('express');
var graphqlHTTP = require('express-graphql');
const schema = require('./src/resolvers/schema')
const query = require('./src/resolvers/query')
const mutation = require('./src/resolvers/mutation')

var root = {
    ...query,
    ...mutation
};

var app = express();
app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000');