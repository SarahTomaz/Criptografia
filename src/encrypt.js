/**
 * function to encrypt one value using cesar cipher //3x + 5 = y
 * @param {string | number} value
 * @returns {number}
 */
export default function encryptOne(value) {
    let alfhabet = 'abcdefghijklmnopqrstuvwxyz., '.split('');
    let encrypted = 0;

    if (typeof value === 'string') {
        value = value.toLowerCase();
        //3x + 5 = y
        console.log(alfhabet.indexOf(value), value);
        encrypted = (alfhabet.indexOf(value) * 3) + 5;
    } else {
        encrypted = (value * 3) + 5;
    }

    return encrypted;
}
