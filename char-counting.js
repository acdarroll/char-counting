function countLetters(text) {
  var text = text.split(" ").join("").toLowerCase();
  var lettersFound = {};

  for(var i = 0; i < text.length; i++) {
    if(lettersFound[text[i]]) {
      lettersFound[text[i]] += 1;
    } else {
      lettersFound[text[i]] = 1;
    }
  }
  return lettersFound;
}

console.log(countLetters("Lighthouse"));