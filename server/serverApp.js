// The use strict mode changes previously accepted "bad syntax" into real errors.
'use strict'

const http               = require('http');
const express            = require('express');
const socketio           = require('socket.io');
const mongoose           = require('mongoose');
const port               = 3000;

// const url = 'mongodb://localhost:27017';

// const mongoClient = new MongoClient(url);

// const dbName = 'firstDB';

const app = express();
// const clientPath = `${__dirname}/../client`;

app.use(express.json());

const server = http.createServer(app);
// const io = socketio(server);

// async function main() 
// {
//     await mongoClient.connect();
//     console.log('Connected successfully to the database server');

//     const db = mongoClient.db(dbName);
//     const collection = db.collection('documents');

//     // insert demo code

//     return 'done.';
// }

// main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => mongoClient.close());




server.on('error', (err) => {
    console.error('Server error: ', err);
});

server.listen(port, () => {
    console.log(`Server is started and listening on port ${port}`);
});