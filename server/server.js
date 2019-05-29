import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

import models from './models';

import typeDefs from './typeDefs';
import resolvers from './resolvers';


//After the address is the database name in this case .../DMC
const mongoConAdmin = 'mongodb+srv://admin:hcENHLOjZBM8GZ1a@cluster0-06naj.mongodb.net/DMC?retryWrites=true';
const mongoCon = 'mongodb+srv://dmcApp:xTaaianFRZ00Vrws@cluster0-06naj.mongodb.net/DMC?retryWrites=true';
mongoose.connect(mongoCon);

var db = mongoose.connection;
db.on('error', function () { console.log('failed to connect to database') });
db.once('open', function () {
    console.log("Connection established");
})

const app = express();

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: { models: models }
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
    console.log('Apollo server listening on 4000');
});

