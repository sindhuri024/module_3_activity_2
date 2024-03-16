const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');

const router = express.Router();

router.post('/', EmployeeController.createEmployee);
router.get('/:id', EmployeeController.findEmployeeById);
router.patch('/:id', EmployeeController.updateEmployeeDetailsById);
router.delete('/:id', EmployeeController.deleteEmployeeById);

module.exports = router;
