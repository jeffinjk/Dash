const mongodb = require('mongodb');

const mongo = async () => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'mydatabase';

    try {
        const client = new mongodb.MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);

        const { username, password } = { username: "blaaa", password: "password" };
        const collection = db.collection('users');

        const res = await collection.insertOne({ username, password });
        console.log('User data saved successfully');
        console.log(res);

        await client.close();
    } catch (err) {
        console.error('An error occurred:', err);
    }
};

mongo();
