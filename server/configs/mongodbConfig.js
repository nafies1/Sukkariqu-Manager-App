const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGODB_URL || "mongodb://localhost:27017";
const dbName = "sukkariqu";
const client = new MongoClient(url, { useUnifiedTopology: true });

module.exports = {
  dbName,
  client
}