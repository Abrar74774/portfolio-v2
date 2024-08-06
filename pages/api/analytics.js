// pages/api/posts.js

import { MongoClient } from 'mongodb';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const client = new MongoClient(process.env.MONGO_URI);

        try {
            await client.connect();
            const dbName = "portfolio";
            const collectionName = "analytics";

            const database = client.db(dbName);
            const collection = database.collection(collectionName);

            const query = { [(new Date()).toLocaleDateString()]: { $exists: true } };
            const update = { $push: { [(new Date()).toLocaleDateString()]: req.body } };
            const options = { upsert: true };

            const result = await collection.updateOne(query, update, options);
            res.status(200).json({ message: 'sent' });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'error' })
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'sent' });
    }

}

