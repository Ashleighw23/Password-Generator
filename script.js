// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
    var allInOne = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < 20; i++){
let generatePassword = allInOne[math.floor(math.random()* 62)];
password[i] += generatePassword;
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
    for (var i = 0; i < password.length; i++) {
password[i].generatePassword = '';
    }
}