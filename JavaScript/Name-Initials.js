const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Name Initials Generator");

rl.question('Enter full name: ', (nameInput) => {
   if (nameInput.trim() === "") {
    console.log("Error: Name cannot be empty");
  } else {
    let words = nameInput.split(" ");
    
    let initials = "";
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      
     if (word.length > 0) {
        
        let firstLetter = word[0].toUpperCase();
        
        
        initials = initials + firstLetter;
      }
    }
    
    console.log("Input: " + nameInput);
    console.log("Output: " + initials);
  }
  
  rl.close();
});