const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Triangle Third Angle Calculator");

rl.question('Enter first angle (a): ', (angle1Input) => {
  let angle1 = parseFloat(angle1Input);

  rl.question('Enter second angle (b): ', (angle2Input) => {
    let angle2 = parseFloat(angle2Input);

    if (isNaN(angle1) || isNaN(angle2)) {
      console.log("Error: Please enter valid numbers");
    } else if (angle1 + angle2 >= 180) {
      console.log("Error: The sum of the two angles must be less than 180 degrees");
    } else {
      let angle3 = 180 - angle1 - angle2;
      
      console.log("Input: a = " + angle1 + ", b = " + angle2);
      console.log("Output: " + angle3);
    }

    rl.close();
  });
});