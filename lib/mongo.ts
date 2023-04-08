import { MongoClient } from 'mongodb';

// const uri: string = process.env.MONGODB_URI || "default_uri";
const uri: string = 'mongodb+srv://arupbasak:bhmpeJmXwE2YUGq@arupbasak-co-in.csn5c2c.mongodb.net/test'
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}
export default clientPromise;