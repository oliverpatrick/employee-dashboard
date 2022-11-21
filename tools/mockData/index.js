const fs = require('fs');
const path = require('path');
const mockUserData = require('../mockData/users/index');
const mockEmployeeData = require('../mockData/details/index');
const mockStatistics = require('../mockData/stats/index');

const { users } = mockUserData;
const { employees } = mockEmployeeData;
const { statistics } = mockStatistics;

const data = JSON.stringify({
  users,
  employees,
  statistics
});

const filepath = path.join(__dirname, '../mockAPI/db.json');

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log('Mock DB created.');
});
