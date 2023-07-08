/* - if a word begins with a vowel, the letter remains in place and 'way' is appended to the end of the word:
apple --> appleway

- if a word begins with one consonant, that letter is moved to the end and 'ay' is appended:
pig latin --> igpay atinlay

- if a word begins with two consonants, both letters are moved to the end and 'ay' is appended:
grade --> adegray */

/* write a program that accepts text input and prints out the Pig Latin translation according to the above rules.

If the user enters nothing or a single-letter word, your program should print a message that the input can't be translated.*/ 

//Creating text input and output variables that connects to inner HTML
/*const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

textInput.addEventListener('keyup', (e) => {
    const input =e.target.value;
    textOutput.innerText = input;
    console.log(input);

});

function pigLatinTranslator(str) {
//error if empty field or one letter response 
if (str == "" || str.length == 1) {
    return "Incorrect Input: Please enter a word with more than one letter"
}
//creating an array of our vowels and a variable to input our pig latin string 
let vowels = ['a', 'e', 'i', 'o', 'u']
let newStr = "";
  

}
*/
/*
const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");
const vowels = ["a", "i", "o", "u", "e"];
const ending = "ay";

//Method waits for key to be released 
textInput.addEventListener("keyup", (e) => {
  const input = e.target.value;
  const output = input
    .split(" ")
    .map((word) => {
      //if first letter is vowel then return with 'way' ending
      if (vowels.includes(word[0])) { //set our vowels array at the top 
        return word + "way";
      }
      //iterate through characters of word until we find a vowel
      let consonantsPrefix = "";
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (vowels.includes(char)) {
          break;
        }
        consonantsPrefix += char;
      }
      return (
        word.substring(consonantsPrefix.length) + consonantsPrefix + ending
      );
      //Iterate through characters of word
    })
    .join(" ");
  textOutput.innerText = output;
});
*/

/*
const textInput = document.getElementById("textInput");
const textButton = document.getElementById("textButton");
const textOutput = document.getElementById("textOutput");
const vowels = ["a", "i", "o", "u", "e"];
const ending = "ay";

// Function to convert the input text
const convertText = () => {
  const input = textInput.value.trim(); // Trim leading/trailing whitespace
  if (input === "" || input.length === 1) {
    textOutput.innerText = "Incorrect Input: Please enter a word with more than one letter";
    return;
  }

  const input = textInput.value;
  const output = input
    .split(" ")
    .map((word) => {
      // if first letter is vowel then return with 'way' ending
      if (vowels.includes(word[0])) {
        return word + "way";
      }
      // iterate through characters of word until we find a vowel
      let consonantsPrefix = "";
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (vowels.includes(char)) {
          break;
        }
        consonantsPrefix += char;
      }
      return (
        word.substring(consonantsPrefix.length) +
        consonantsPrefix +
        ending
      );
    })
    .join(" ");
  textOutput.innerText = output;

  if (output == "" || output.length == 1) {
    return "Incorrect Input: Please enter a word with more than one letter"
}
};

// Event listener for button click
textButton.addEventListener("click", convertText);
*/

const textInput = document.getElementById("textInput");
const textButton = document.getElementById("textButton");
const textOutput = document.getElementById("textOutput");
const vowels = ["a", "i", "o", "u", "e"];
const ending = "ay";

// Function to convert the input text
const convertText = () => {

  //This is our if statement to have inputted text be more than one letter
  const input = textInput.value.trim(); // Trim leading/trailing whitespace
  if (input === "" || input.length === 1) {
    textOutput.innerText = "Incorrect Input: Please enter a word with more than one letter";
    return;
  }
  
  const output = input
    .split(" ")
    .map((word) => {
      // if first letter is vowel then return with 'way' ending
      if (vowels.includes(word[0])) {
        return word + "way";
      }
      // iterate through characters of word until we find a vowel
      let consonantsPrefix = "";
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (vowels.includes(char)) {
          break; //once vowel is found, loop breaks and goes to next snippet of code
        }
        consonantsPrefix += char;
      }
      return (
        word.substring(consonantsPrefix.length) +
        consonantsPrefix +
        ending
      );
    })
    .join(" ");
  textOutput.innerText = output;
};

// Event listener for button click
textButton.addEventListener("click", convertText);

// Event listener for Enter key press
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    convertText();
  }
});
