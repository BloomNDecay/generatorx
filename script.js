var characterLength = 8;
var userArray = [];


var symbols = ["!","@","#","$","%","^","&","*","?","|","<",">",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0",];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //have function choose  true or false
  var trueSelection = selection();
  var passwordText = document.querySelector("#password");

  if(trueSelection) {
    var createPassword = generatePassword();
     passwordText.value = createPassword;
  }
  else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
var password = "" ;
for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * userArray.length);
    password = password + userArray[randomIndex];  
}
 return password;
}


//create promts for diffrent variables in password 
function selection () {
  userArray = [];
   characterLength = parseInt(prompt("Amount of charters in password (8 - 128)"));
   if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
       alert("input must be (8 - 128) TRY AGAIN!");
       return false;
   }
   if (confirm("Want to add Lowercase letters?")) {
        userArray = userArray.concat(lowerCase);  
   }
  
   if (confirm("Want to add Uppercase letters?")) {
        userArray = userArray.concat(upperCase);  
   }
   if (confirm("Want to add Numbers?")) {
        userArray = userArray.concat(numbers);  
   }
   if ( confirm("Want to add Symbols?")) {
        userArray = userArray.concat(symbols);  
  }
  return true;
}