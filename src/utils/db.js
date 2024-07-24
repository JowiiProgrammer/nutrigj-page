// src/utils/db.js
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb+srv://JowiiProgrammer:JowiiP20100@cluster0.netvpdh.mongodb.net/?retryWrites=true&w=majority');

export async function connectToDatabase() {
  await client.connect();
  console.log('Connected to MongoDB Atlas');
  return client.db('NutriGJ');
}
