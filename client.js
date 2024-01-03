// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// logs current employee info
function logCurrentEmployeeInfo( employee ){
  for (const person of employee){
    console.log(person);
  }
}

logCurrentEmployeeInfo(employees);

// This function will calculate 1 employee's bonus!

function calculateIndividualEmployeeBonus( employee ) { 
  // Declaring variables  
  const revRat = employee.reviewRating;
  const annualSalary = employee.annualSalary;
  let bonusPercentage;
  let totalCompensation;
  let totalBonus;

  // calculate bonus percentage
  if (revRat <= 2){
    bonusPercentage = 0.00;
  }
  else if(revRat === 3){
    bonusPercentage = 0.04;
  }
  else if (revRat === 4){
    bonusPercentage = 0.06;
  }
  else if (revRat === 5){
    bonusPercentage = 0.10;
  }
  if (employee.employeeNumber.length === 4){
    bonusPercentage += 0.05;
  }
  if (annualSalary >= 65000){
    bonusPercentage = bonusPercentage - 0.01;
  }
  if (totalBonus > 0.13){
    totalBonus = 0.13;
  }
  if (totalBonus < 0.00){
    totalBonus = 0.00;
  }
  // calculate total compensation

  // calculate total Bonus
  
  // return new object with bonus results
  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }
}

console.log(calculateIndividualEmployeeBonus(employees[0]));