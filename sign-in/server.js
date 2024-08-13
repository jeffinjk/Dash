const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

// MongoDB connection URL and database name
const url = 'mongodb://localhost:27017'; // MongoDB server URL
const dbName = 'mydatabase'; // Your database name

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

client.connect(err => {
    if (err) throw err;
    db = client.db(dbName);
    console.log('Connected to MongoDB');
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle form submissions
app.post('/submit', (req, res) => {
    const { username, password } = req.body;
    const collection = db.collection('users');

    // Insert user data into MongoDB
    collection.insertOne({ username, password }, (err, result) => {
        if (err) {
            res.status(500).send('Error occurred while saving user data');
        } else {
            res.status(200).send('User data saved successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
