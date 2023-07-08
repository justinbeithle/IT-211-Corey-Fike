/*
Pig Latin Translator 
Written by: Justin David 
Date: 7/7/2023
*/

/* - if a word begins with a vowel, the letter remains in place and 'way' is appended to the end of the word:
apple --> appleway

- if a word begins with one consonant, that letter is moved to the end and 'ay' is appended:
pig latin --> igpay atinlay

- if a word begins with two consonants, both letters are moved to the end and 'ay' is appended:
grade --> adegray */

/* write a program that accepts text input and prints out the Pig Latin translation according to the above rules.

If the user enters nothing or a single-letter word, your program should print a message that the input can't be translated.*/ 


// pulling the id's we set in our html and assigned them a variable name to us for our JS
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
  
//this splits the strings into an array of substrings and map iterates through it
  const output = input
    .split(" ")
    .map((word) => {
      // if first letter is vowel then return with original word and 'way' ending
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
        word.substring(consonantsPrefix.length) + // this esentially gets a substring of original word and extracts the beggining consonants
        consonantsPrefix + ending //where it is added to the end and "ay" is concatenated after 
      );
    })
    .join(" ");
  textOutput.innerText = output; 
};

// Event listener for button click
textButton.addEventListener("click", convertText);   //when button is clicked it calls onto our pig latin translator function

// Event listener for Enter key press and has it so enter key will work as well 
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    convertText();
  }
});
