import encrypt from './src/encrypt.js';
import decrypt from './src/decrypt.js';
import decryptLetter from './src/decryptLetter.js';

document.getElementById("cripto").addEventListener("click", Criptografar);
document.getElementById("descripto").addEventListener("click", Descriptografar);

function Criptografar() {
  let userWords = document.getElementById("palavra").value;
  let result = userWords.split('').map(encrypt).join(' ');

  console.log(result);

  let alfhabet = 'abcdefghijklmnopqrstuvwxyz., '.split('');
  let encryptLetters = result.split(' ').map((value) => {

    
    if (value <= 29) {
      return alfhabet[value];
    }

    return alfhabet[value % 29];
  }).join('');

  document.getElementById("resultado").innerHTML = (`A palavra "${userWords}" criptografada é: numeros: ${result} <br> letras: ${encryptLetters}`);
}

function Descriptografar() {
  let userWords = document.getElementById("palavra").value;
  let result = userWords.split(' ').map(decrypt).join('');

  console.log(userWords.split('').length);

  if (!(userWords.split(' ').length > 1)) {
    document.getElementById("resultado").innerHTML = (`Por favor use valores numericos para descriptografar`);
  } else {
    document.getElementById("resultado").innerHTML = (`Os Numeros "${userWords}" descriptografados são: ${result}`);
  }


}
//2*x + 3
