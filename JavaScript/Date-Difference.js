const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Date Difference Calculator");
console.log("Date format: YYYY-MM-DD (example: 2024-03-19)");

rl.question('Enter first date: ', (date1Input) => {
  rl.question('Enter second date: ', (date2Input) => {
    let d1 = new Date(date1Input);
    let d2 = new Date(date2Input);
    
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
      console.log("Error: Invalid date format. Please use YYYY-MM-DD format");
    } else {
      let timeDifference = d2.getTime() - d1.getTime();
      
      let absoluteDifference = Math.abs(timeDifference);
      
      
      let daysDifference = Math.floor(absoluteDifference / (1000 * 60 * 60 * 24));
      
      
      console.log("Input: date1 = " + date1Input + ", date2 = " + date2Input);
      console.log("Output: " + daysDifference);
    }
    
    
    rl.close();
  });
});