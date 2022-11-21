/**
 * function to decrypte the one value using cesar cipher
 * @param {number | string} value  
 * @returns {char}
 */
 export default function decryptOne(value) {
    let alfhabet = 'abcdefghijklmnopqrstuvwxyz., '.split('');


    let oldIndex = (value - 5) / 3;

    return alfhabet[oldIndex % 29];
}
