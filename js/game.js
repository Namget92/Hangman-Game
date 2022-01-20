do {
  
  if (royalUnderLine.includes(word)) {
    alert(`YOU WON!!!`);
    break;
  } else if (lives === 0) {
    alert(`YOU LOST! Right word was: "${word}".`);
    break;
  } else {
  }

  if (royalUnderLine.charAt(0) === word.charAt(0) && royalUnderLine.includes(underLine)) {
    firstLetterUpperCase();
  }

  preHangMan = prompt(
    `${royalUnderLine
      .split("")
      .join(betweenChars)} \nLives Left: ${lives} \nGuesses made: ${guesses}`
  );

  if (preHangMan === null) {
    alert("You canceled the game.");
    break;
  }
  
  countGame = -1;

  if (alphabet.includes(preHangMan)) {
    hangMan = preHangMan.toLowerCase();
  } else if (preHangMan.length !== 1) {
    alert("The game only accepts one letter guesses.");
    continue;
  } else if (!alphabet.includes(preHangMan)) {
    alert("The game only accepts letters, a-z or A-Z.");
    continue;
  } else {
  }

  if (guesses.includes(hangMan)) {
    alert(
      "Shame on you, you alredy guessed on that letter. \nYou will now lose a life."
    );
    lives--;
    continue;
  } else if (word.includes(hangMan)) {
    for (const bokstav of word) {
      countGame++;
      if (bokstav.includes(hangMan)) {
        royalUnderLine = replaceAt(countGame, hangMan, royalUnderLine);
      }
    }
  } else if (!word.includes(hangMan)) {
    lives--;
    guesses.push(hangMan);
  } else {
  }

} while (true);
