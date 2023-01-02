//create a function to allow slider to raise or lower the amount of characters
const characterRange = document.getElementById
('CharacterRange')
const characterNumber = document.getElementById
('CharacterNumber')
const uppercaseElement = document.getElementById
('Uppercase')
const numbersElement = document.getElementById
('numbers')
const symbolsElement = document.getElementById
('symbols')
const form = document.getElementById('passwordGeneratorFrom')
const passwordDIsplay = document.getElementById('password')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


CharacterRange.addEventListener('input', syncCharacterAmount)
CharacterNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterNumber.value
  const uppercase = uppercaseElement.checked
  const numbers = numbersElement.checked 
  const symbols = symbolsElement.checked   
  const password = generatePassword(characterAmount, uppercase, numbers, symbols)
  passwordDIsplay.innerText = password
})

function generatepassword(characterAmount, uppercase, numbers, symbols){
  function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
}

const passwordCharacters = []
for (let i = 0; i < characterAmount; i++) {
  const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
  passwordCharacters.push(String.fromCharCode(characterCode))
}
return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array 
}


function syncCharacterAmount(e) {
  var value = e.target.value
  characterNumber.value = value
  characterRange.value = value
}