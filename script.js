const btn = document.querySelector("button");
const main = document.querySelector("main");
const input = document.querySelector("input");
const para = document.createElement("p");

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];

function rot13(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    const isChar = alphabet.includes(character);
    if (isChar === false) {
      newStr += character;
    } else {
        const charIndex = alphabet.findIndex((c) => c === character);
        newStr += alphabet[charIndex + 13] || alphabet[charIndex - 13];
      }
  }
  return newStr;
}


function checkWord () {
  para.innerText = rot13(input.value);
  main.appendChild(para);
}
