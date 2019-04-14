const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./Schemas/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//allow cross orgin request
app.use(cors());

//database connection to mongoDB atlast

mongoose.connect('mongodb+srv://das:Abc123@graphql-c90au.mongodb.net/graphql?retryWrites=true')
  .then( () => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch( (err) => console.error(err));



// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});