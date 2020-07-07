// Assignment Code
// give the variables
var generateBtn = document.querySelector("#generate");
var hasSpecialCharacters;
var hasLowerCharacters;
var hasUpperCharacters;
var hasNumberCharacters;
var numericCharacters = ["0123456789"];
var specialCharacters = ["~!?/@#$%^&*+-=()[]{}_;:'\"|"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = upperCase.toString().toLowerCase().split(",");
// give copy button var
var clipboardEl = document.querySelector("#copy-button");

//function to make randomly selected
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  console.log(randIndex, arr);
  var randElement = arr[randIndex];
  return randElement;
}

function generatePassword() {
  var passwordlent = prompt("How many characters do you want in your password?");
  var newPassword = "";
  var randomPassowrd = [];

  // first question
  if (passwordlent < 8 || passwordlent > 128) {
    alert("please type 8 ~ 128 characters");
    passwordlent = prompt("How many characters do you want in your password?");
  }
  // secound question
  hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  // thrid question
  hasLowerCharacters = confirm(
    "Click OK to confirm including lower characters."
  );
  // fourth question
  hasUpperCharacters = confirm(
    "Click OK to confirm including upper characters."
  );
  // fifth question
  hasNumberCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );
  // make sure user choose at least one of options
  if (hasSpecialCharacters === false && hasLowerCharacters === false && hasUpperCharacters === false && hasNumberCharacters === false) {
      alert ("You need to choose at least one")
    // secound question
    hasSpecialCharacters = confirm(
      "Click OK to confirm including special characters."
    );
    // thrid question
    hasLowerCharacters = confirm(
      "Click OK to confirm including lower characters."
    );
    // fourth question
    hasUpperCharacters = confirm(
      "Click OK to confirm including upper characters."
    );
    // fifth question
    hasNumberCharacters = confirm(
      "Click OK to confirm including numeric characters."
    );
  }
  // make newPassword concat options
  if (hasSpecialCharacters) newPassword = newPassword.concat(specialCharacters);
    if (hasLowerCharacters) newPassword = newPassword.concat(lowerCase);
    if (hasUpperCharacters) newPassword = newPassword.concat(upperCase);
    if (hasNumberCharacters) newPassword = newPassword.concat(numericCharacters);

  for (var i = 0; i < passwordlent; i++ ) {
    randomPassowrd = randomPassowrd.concat(getRandom(newPassword));
  }


  return randomPassowrd.join("");

}


// Write password to your #password input
function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// add function for copy to clipboard
clipboardEl.addEventListener("click", function (event) {
  var copyTextarea = document.getElementById("password");
  copyTextarea.select();
  document.execCommand("copy");
  alert("copied password");
});
