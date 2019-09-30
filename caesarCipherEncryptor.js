function caesarCipherEncryptor(string, key) {
  let alpha = "abcdefghijklmnopqrstuvwxyz"
	
	let encryptedString = ""
	
	for (let i = 0; i < string.length; i++) {
		let newIdx = (alpha.indexOf(string[i]) + key) % 26
		
		encryptedString += alpha[newIdx]
	}
	
	return encryptedString
}