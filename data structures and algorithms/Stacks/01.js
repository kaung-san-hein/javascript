/* Stack */
// functions: push, pop, peek, lenght

let letters = []; // this is our stack
let word = "racecar";
let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " not is a palindrome.");
}
