const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Circle Calculator");

rl.question('Enter radius: ', (radiusInput) => {
  let radius = parseFloat(radiusInput);

  if (isNaN(radius)) {
    console.log("Error: Please enter a valid number");
  } else {
    let diameter = radius * 2;
    
    let circumference = 2 * Math.PI * radius;
    
    let area = Math.PI * radius * radius;
    
    let circumferenceRounded = circumference.toFixed(4);
    let areaRounded = area.toFixed(3);
    
    console.log("Input: radius = " + radius);
    console.log("Output: diameter = " + diameter + 
                ", circumference = " + circumferenceRounded + 
                ", area = " + areaRounded);
  }

  rl.close();
});