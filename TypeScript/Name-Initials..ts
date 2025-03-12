import * as readline from 'readline';

const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Name Initials Generator");

rl.question('Enter full name: ', (nameInput: string) => {
  if (nameInput.trim() === "") {
    console.log("Error: Name cannot be empty");
  } else {
    let words: string[] = nameInput.split(" ");
    
    let initials: string = "";
    
    for (let i: number = 0; i < words.length; i++) {
      let word: string = words[i];
      
      if (word.length > 0) {
        let firstLetter: string = word[0].toUpperCase();
        
        initials = initials + firstLetter;
      }
    }
    
    console.log("Input: " + nameInput);
    console.log("Output: " + initials);
  }
  
  rl.close();
});