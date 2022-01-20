const words = [
  "stockholm",
  "programmering",
  "studenter",
  "afterwork",
  "javascript",
];

let countData = 0;
const random = Math.floor(Math.random() * words.length);

for (word of words) {
  if (countData === random) {
    break;
  } else {
    countData++;
  }
}

const guesses = [];
const betweenChars = " ";
const underLine = "_";
const alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".split("");

let countGame = -1;
let lives = 5;
let preHangMan = "";
let hangMan = "";
let royalUnderLine = underLine.repeat(word.length);


function replaceAt(index, replacement, string) {
  return (
    string.substr(0, index) +
    replacement +
    string.substr(index + replacement.length)
  );
}

function firstLetterUpperCase() {
  royalUnderLine =
    royalUnderLine.charAt(0).toUpperCase() + royalUnderLine.slice(1);
  word = word.charAt(0).toUpperCase() + word.slice(1);
}
