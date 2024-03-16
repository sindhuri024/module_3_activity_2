const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  department: String,
  salary: Number,
  phone: Number
}, 
{
  collection: 'LibEmployees' // specifying the collection name
}
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;