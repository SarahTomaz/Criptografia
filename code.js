var cod = [
  ["1", "A"],
  ["2", "B"],
  ["3", "C"],
  ["4", "D"],
  ["5", "E"],
  ["6", "F"],
  ["7", "G"],
  ["8", "H"],
  ["9", "I"],
  ["10", "J"],
  ["11", "K"],
  ["12", "L"],
  ["13", "M"],
  ["14", "N"],
  ["15", "O"],
  ["16", "P"],
  ["17", "Q"],
  ["18", "R"],
  ["19", "S"],
  ["20", "T"],
  ["21", "U"],
  ["22", "V"],
  ["23", "W"],
  ["24", "X"],
  ["25", "Y"],
  ["26", "Z"],
  ["27", "."],
  ["28", ","],
  ["29", " "],
];
var criptoList = [];
document.getElementById("cripto").addEventListener("click", Criptografar);
document.getElementById("descripto").addEventListener("click", Descriptografar);

function Criptografar() {
  var userWords = document.getElementById("palavra").value;

  for (i = 0; i < userWords.length; i++) {
    var c = 0;
    while (c < 29) {
      if (userWords[i] == cod[c][1]) {
        const number = Number(cod[c][0]);
        var result = 3 * number + 5;
        if (result <= 29) {
          criptoList.push(result);
        }
      }
      c++;
    }
  }
  console.log(criptoList);
}

function Descriptografar() {}
//3*x + 5
