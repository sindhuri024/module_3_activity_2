// Student Name: Naga Sindhuri Munjila
// Student Id: 1225912742
// Dude Date: 02/18/2024

const Employee = require('../models/employeeModel');

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body)
    console.log(employee);
    res.status(201).json({ status: 'success', data: employee });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

exports.findEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    console.log(employee);
    res.status(200).json({ status: 'success', data: employee });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: 'Student not found' });
  }
};

exports.updateEmployeeDetailsById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    console.log(employee);
    res.status(200).json({ status: 'success', data: employee });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: 'Student not found' });
  }
};

exports.deleteEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    console.log(employee);
    res.status(204).json({ status: 'success', data: employee });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: 'Student not found' });
  }
};