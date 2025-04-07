function searchSubString(puzzle, word) {
  const rows = puzzle.length;
  const columns = puzzle[0].length;

  for (let i = 0; i < rows; i++) {
    let gorizontal = puzzle[i].join("");
    if (
      gorizontal.includes(word) ||
      gorizontal.split("").reverse().join("").includes(word)
    ) {
      return true;
    }
  }

  for (let j = 0; j < columns; j++) {
    const arr = puzzle.map(function (row) {
      return row[j];
    });
    let vertical = arr.join("");
    if (
      vertical.includes(word) ||
      vertical.split("").reverse().join("").includes(word)
    ) {
      return true;
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let diagonal = "";
      for (let k = 0; k + i < rows && k + j < columns; k++) {
        diagonal += puzzle[k + i][k + j];
      }
      if (
        diagonal.includes(word) ||
        diagonal.split("").reverse().join("").includes(word)
      ) {
        return true;
      }
    }
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = 0; j < columns; j++) {
      let diagonal = "";
      for (let k = 0; i - k >= 0 && j + k < columns; k++) {
        diagonal += puzzle[i - k][j + k];
      }
      if (
        diagonal.includes(word) ||
        diagonal.split("").reverse().join("").includes(word)
      ) {
        return true;
      }
    }
  }

  return false;
}

const examplePuzzle = [
  ["b", "l", "g", "o", "l", "d", "s"],
  ["x", "k", "q", "w", "i", "j", "p"],
  ["a", "n", "w", "k", "k", "p", "n"],
  ["h", "e", "e", "e", "k", "i", "l"],
  ["q", "e", "k", "a", "y", "q", "a"],
  ["h", "u", "h", "a", "e", "a", "u"],
  ["k", "q", "j", "c", "c", "m", "r"],
];

// Level 1
console.log(searchSubString(examplePuzzle, "like")); // true
console.log(searchSubString(examplePuzzle, "gold")); // true
console.log(searchSubString(examplePuzzle, "queen")); // true

// Level 2
console.log(searchSubString(examplePuzzle, "cake")); // true
