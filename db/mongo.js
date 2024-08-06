import { MongoClient } from "mongodb";

export async function sendSessionDetails(sessionDetails) {
    // let orders = null
    const uri = process.env.MONGO_URI
    const client = new MongoClient(uri);
    try {
        await client.connect();
    
        const dbName = "portfolio";
        const collectionName = "analytics";
    
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const result = await collection.updateOne((new Date()).toLocaleDateString(), sessionDetails, { upsert: true });
        console.log(`Successfully inserted.\n`);
    } catch (err) {
        console.error(`Error while inserting mongo document: ${err}\n`);
    }

}
