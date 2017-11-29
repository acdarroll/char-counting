function charPositioning(text) {
  var text = text.split(" ").join("").toLowerCase();
  var lettersFound = {};

  for(var i = 0; i < text.length; i++) {
    if(lettersFound[text[i]]) {
      lettersFound[text[i]].push(i);
    } else {
      lettersFound[text[i]] = [i];
    }
  }
  return lettersFound;
}

console.log(charPositioning("Lighthouse"));