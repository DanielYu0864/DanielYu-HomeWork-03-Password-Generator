// Assignment Code
var generateBtn = document.querySelector("#generate");
var hasSpecialCharacters;
var hasLowerCharacters;
var hasUpperCharacters;
var hasNumberCharacters;
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "!", "?", "/", "@", "#", "$", "%", "^", "&", "*", "+", "-", "=", "(", ")", "[", "]", "{", "}", "_", ";", ":", "'", "\"", "|"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = upperCase.toString().toLowerCase().split(",");


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  console.log(randIndex, arr);
  var randElement = arr[randIndex];
  return randElement;
}


function generatePassword() {
  var passwordlent = prompt("how many characters you want in your password?");
  var newPassword = [""];


  if (passwordlent < 8 || passwordlent > 128) {
    alert("please type 8 ~ 128 characters");
    passwordlent = prompt("how many characters you want in your password?");
  }

  hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  hasLowerCharacters = confirm(
    "Click OK to confirm including lower characters."
  );

  hasUpperCharacters = confirm(
    "Click OK to confirm including upper characters."
  );


  hasNumberCharacters = confirm(
    "Click OK to confirm including numberic characters."
  );

  if (hasSpecialCharacters === false && hasLowerCharacters === false && hasUpperCharacters === false && hasNumberCharacters === false) {
    alert ("You need to chooise at least one")
    hasSpecialCharacters = confirm(
      "Click OK to confirm including special characters."
    );
    hasLowerCharacters = confirm(
      "Click OK to confirm including lower characters."
    );
    hasUpperCharacters = confirm(
      "Click OK to confirm including upper characters."
    );
    hasNumberCharacters = confirm(
      "Click OK to confirm including numberic characters."
    );
  }



  var charactersCount = hasNumberCharacters + hasLowerCharacters + hasUpperCharacters + hasSpecialCharacters;

  // console.log(charactersCount);
  for (var i = 0; i < passwordlent; i+= charactersCount) {

    if (hasSpecialCharacters) {
      newPassword = newPassword.concat(getRandom(specialCharacters));
    }
    if (hasLowerCharacters) {
      newPassword = newPassword.concat(getRandom(lowerCase));
    }
    if (hasUpperCharacters) {
      newPassword = newPassword.concat(getRandom(upperCase));
    }
    if (hasNumberCharacters) {
      newPassword = newPassword.concat(getRandom(numericCharacters));
    }
  }
  return newPassword;



}


// Write password to your #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // function getFinalPassword() {

  //   for (j = 0; j < passwordlent; j++) {
  //     password = getRandom(password);
  //   }
  //   return password ;

  // };
  // var finalPassword = getFinalPassword();
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
