const express = require('express');
const mongodb = require('mongodb');
const path = require('path');

const app = express();
const port = 5501;
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const mongoClient = new mongodb.MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connectToMongo = async () => {
    try {
        await mongoClient.connect();
        console.log('Connected to MongoDB');
        return mongoClient.db(dbName);
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
    }
};

app.post('/addUser', async (req, res) => {
    const db = await connectToMongo();
    const { username, password } = req.body;

    try {
        const collection = db.collection('users');
        const result = await collection.insertOne({ username, password });
        res.status(201).send({ message: 'User data saved successfully', result });
    } catch (err) {
        res.status(500).send({ message: 'Error occurred while saving user data', error: err });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
