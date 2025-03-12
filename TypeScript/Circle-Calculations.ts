import * as readline from 'readline';

const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Circle Calculator");

rl.question('Enter radius: ', (radiusInput: string) => {
  let radius: number = parseFloat(radiusInput);
  
  if (isNaN(radius)) {
    console.log("Error: Please enter a valid number");
  } else {
    let diameter: number = radius * 2;
    
    let circumference: number = 2 * Math.PI * radius;
    
    let area: number = Math.PI * radius * radius;
    
    let circumferenceRounded: string = circumference.toFixed(4);
    let areaRounded: string = area.toFixed(3);
    
    console.log("Input: radius = " + radius);
    console.log("Output: diameter = " + diameter + 
                ", circumference = " + circumferenceRounded + 
                ", area = " + areaRounded);
  }
  
  rl.close();
});