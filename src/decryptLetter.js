/**
 * NÀO FUNCIONA
 * function to decrypte the one value using cesar cipher
 * @param {number | string} value  
 * @returns {char}
 */
 export default function decryptLetter(value) {
    let alfhabet = 'abcdefghijklmnopqrstuvwxyz., '.split('');

    console.log(value, alfhabet[value]);

    let oldIndex = (value - 5) - 1 / 3;

    console.log('oldIndex', oldIndex);

    return alfhabet[oldIndex];
}
