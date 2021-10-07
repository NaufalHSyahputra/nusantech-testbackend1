function replaceChar(origString, replaceChar, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);

  return firstPart + replaceChar + lastPart;
}
function generateMaze1(s, isHTML=false) {
  if ((s + 1) % 4 !== 0 || s <= 0) {
    console.log(
      "Input harus lebih dari 0 atau input harus sesuai dengan 4n - 1, dimana n adalah angka positif"
    );
    return;
  }
  const totalLoop = (s + 1) / 4;
  const array = [];
  const tembok_tebal = "@";
  const jalan_lebar = !isHTML ? " " : "&nbsp;";
  const break_line = !isHTML ? "\n" : "<br>";
  const tembok = tembok_tebal.repeat(s);
  for (let i = 0; i < totalLoop; i++) {
    array[i] = [];
    for (let j = 0; j < 4; j++) {
      switch (j) {
        case 0:
          array[i][j] = replaceChar(tembok, jalan_lebar, 1);
          break;
        case 2:
          array[i][j] = replaceChar(tembok, jalan_lebar, s - 2);
          break;
        default:
          array[i][j] =
            tembok.substr(0, 1) +
            jalan_lebar.repeat(!isHTML ? s - 2 : s * 3) +
            tembok.substr(s - 1, 1);
          break;
      }
    }
  }
  if (!isHTML) {
    console.log(array.map((e) => e.join(break_line)).join(break_line));
  }
  return array.map((e) => e.join(break_line)).join(break_line);
}

if (typeof module !== 'undefined' && module.exports) {
  generateMaze1(15, false)
}