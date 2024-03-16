// Student Name: Naga Sindhuri Munjila
// Student Id: 1225912742
// Dude Date: 02/18/2024

const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/EmployeeRoutes');

const app = express();
app.use(express.json());
const uri = "mongodb+srv://nmunjila:Sindhuri1224@cluster0.vyhmgso.mongodb.net/LibDetails?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Routes
app.use('/api/employee', employeeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});