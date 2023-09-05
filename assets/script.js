// Assignment code here
var charLength = 8;
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', ';', ':', ',', '<', '.', '>', '?', '/', '[', ']', '{', '}'];
var choices = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var prompt = inputPrompt();
  var passwordText = document.querySelector("#password");

  if(prompt){
    var password = generatePassword();
    passwordText.value = password;
  }
  else{
    passwordText.value = "";
  }

  passwordText.value = password;

}

function generatePassword(){
  var password = "";
  for(var i=0; i < charLength; i++){
    var randIndex = Math.floor(Math.random() * choices.length);
    password = password + choices[randIndex];
  }
  return password;
}

function inputPrompt(){
  charLength = parseInt(prompt("Please state character length between 8 - 128 characters:"));

  if(isNaN(charLength) || charLength < 8 || charLength > 128){
    alert("Not a valid length. Please state character length between 8 - 128 characters: ");
    return false;
  }

  if(confirm("Include uppercase characters?")){
    choices = choices.concat(upperCaseChar);
  }
  
  if(confirm("Include lowercase characters?")){
    choices = choices.concat(lowerCaseChar);
  }

  if(confirm("Include numbers?")){
    choices = choices.concat(numChar);
  }

  if(confirm("Include special characters?")){
    choices = choices.concat(specialChar);
  }
  return true;
}

