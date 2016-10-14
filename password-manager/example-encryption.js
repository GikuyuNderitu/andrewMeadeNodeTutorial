let crypt = require('crypto-js')

let secretMessage = {
	name: 'Gikuyu',
	password: 'coolioBroFoShow'
}
let secretKey = '123abc'

let encryptedMessage = crypt.AES.encrypt(JSON.stringify(secretMessage),secretKey)
console.log('Encrypted: ' + encryptedMessage);


let bytes = crypt.AES.decrypt(encryptedMessage,secretKey)
let decrypted = JSON.parse(bytes.toString(crypt.enc.Utf8))

console.log('Decrypted: ',decrypted);
console.log(secretMessage.password);
