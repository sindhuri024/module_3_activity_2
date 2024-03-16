// Student Name: Naga Sindhuri Munjila
// Student Id: 1225912742
// Dude Date: 02/18/2024

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nmunjila:Sindhuri1224@cluster0.vyhmgso.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});