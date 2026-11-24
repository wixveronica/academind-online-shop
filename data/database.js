const mongodb = require("mongodb");
const { MongoMemoryServer } = require("mongodb-memory-server");

const MongoClient = mongodb.MongoClient;

let database;
let mongoServer;

async function connectToDatabase() {
  const mongoUri = process.env.MONGODB_URI;

  let client;

  if (mongoUri) {
    client = await MongoClient.connect(mongoUri);
  } else {
    mongoServer = await MongoMemoryServer.create();
    client = await MongoClient.connect(mongoServer.getUri());
  }

  database = client.db(process.env.MONGODB_DB || "online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You must connect first!");
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
