const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Rectangle Area");

rl.question('Enter length: ', (lengthInput) => {
  let length = parseFloat(lengthInput);

  rl.question('Enter width: ', (widthInput) => {
    let width = parseFloat(widthInput);

    if (isNaN(length) || isNaN(width)) {
      console.log("Error: Please enter valid numbers");
    } else {
      let area = length * width;

      console.log("Input: length = " + length + ", width = " + width);
      console.log("Output: " + area);
    }

    rl.close();
  });
});