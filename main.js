const calculateAge = require("./src/calculateAge.js").calculateAge;

const main = function() {
  const dob = process.argv.slice(2);
  const date = dob[0];
  const month = dob[1];
  const year = dob[2];
  calculateAge(date, month, year);
  const age = calculateAge(date, month, year);
  age.forEach(e => console.log(e));
};

main();
