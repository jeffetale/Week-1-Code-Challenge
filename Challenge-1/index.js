const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user to enter their score (between 0 and 100)
rl.question("Enter the student's score (between 0 and 100): ", function(score) {
  // Close the readline interface
  rl.close();

  // Declare a variable to store the grade
  let grade;

  // Determine the grade using if/else statements
  if (score >= 80) {
    grade = 'A';
  } else if (score >= 60) {
    grade = 'B';
  } else if (score >= 50) {
    grade = 'C';
  } else if (score >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  // Output the grade
  console.log(`Your grade is ${grade}.`);
});
