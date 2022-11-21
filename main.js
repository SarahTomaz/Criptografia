import encrypt from './src/encrypt.js';
import decrypt from './src/decrypt.js';

document.getElementById("cripto").addEventListener("click", Criptografar);
document.getElementById("descripto").addEventListener("click", Descriptografar);
let result = '';

function Criptografar() {
  let userWords = document.getElementById("palavra").value;
  let result = userWords.split('').map(encrypt).join(' ');
  document.getElementById("resultado").innerHTML = (`A palavra "${userWords}" criptografada é: ${result}`);
}

function Descriptografar() {
  let userWords = document.getElementById("palavra").value;
  console.log(userWords.split(' '))
  let result = userWords.split(' ').map(decrypt).join('');
  document.getElementById("resultado").innerHTML = (`Os Numeros "${userWords}" descriptografados são: ${result}`);
}
//2*x + 3
