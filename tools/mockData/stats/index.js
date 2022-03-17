const casual = require('casual');

casual.define('statistics', function () {
  return {
    holidayTaken: 1,
    holidayDays: 30,
    daysAbsent: 5,
    daysInWorkingYear: 255,
    daysWorked: 102
  };
});

const data = [];

casual.define('stats_list', function () {
  for (let i = 0; i < 1; i++) {
    data.push(casual.statistics);
  }

  return data;
});

const statistics = casual.stats_list;

module.exports = { statistics };
