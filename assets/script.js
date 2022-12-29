//create a function to allow slider to raise or lower the amount of characters

var CharacterRange = document.getElementById
('CharacterRange')
var CharacterNumber = document.getElementById
('CharacterNumber')

CharacterRange.addEventListener('input', syncCharacterAmount)
CharacterNumber.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  var value = e.target.value
  CharacterNumber.value = value
  CharacterRange.value = value
}


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log(passwordText);
}
