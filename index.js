/* Your Code Here */
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}
function createEmployeeRecords(arrays) {
  return arrays.map(createEmployeeRecord);
}

function createTimeInEvent(dateTime) {
  const [date, hour] = dateTime.split(' ');

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  });

  return this;
}

function createTimeOutEvent(dateTime) {
  const [date, hour] = dateTime.split(' ');

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  });

  return this;
}


function hoursWorkedOnDate(date) {
  const inEvent = this.timeInEvents.find(e => e.date === date);
  const outEvent = this.timeOutEvents.find(e => e.date === date);

  return (outEvent.hour - inEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
  const hours = hoursWorkedOnDate.call(this, date);
  return hours * this.payPerHour;
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, emp) => {
    return total + allWagesFor.call(emp);
  }, 0);
}



function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(e => e.firstName === firstName);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

