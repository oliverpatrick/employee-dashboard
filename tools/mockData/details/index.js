const casual = require('casual');

casual.define('employee', function () {
  return {
    id: casual.uuid,
    title: casual.name_prefix,
    firstname: casual.first_name,
    lastname: casual.last_name,
    role: 'Software Developer',
    phone: casual.phone,
    email: casual.email,
    address: casual.building_number + ' ' + casual.street,
    postalCode: casual.zip(3, 3),
    county: casual.state,
    city: casual.city,
    startDate: casual.date('DD-MM-YYYY'),
    naNumber:
      casual.letter.toUpperCase() +
      casual.letter.toUpperCase() +
      casual.integer((from = 100000), (to = 999999)) +
      casual.letter.toUpperCase()
  };
});

const data = [];

casual.define('employee_details', function () {
  for (let i = 0; i < 5; i++) {
    data.push(casual.employee);
  }

  return data;
});

const employees = casual.employee_details;

module.exports = { employees };
