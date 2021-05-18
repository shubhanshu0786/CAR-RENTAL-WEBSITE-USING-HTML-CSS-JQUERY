//Problem: Hints are visable even when form is valid
//Solution: Hide and show the hints at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Hide Hints
$("form span").hide();

//function to check if the password is at least 8 characters - is valid- returns true or false
function isPasswordValid(){
	return $password.val().length >8;
}

//function to check if the two passwords match - returns true or false
function arePasswordsMatching(){
	return $password.val() === $confirmPassword.val();
}

//function to allow user to submit form only if the password is valid and matching
function canSubmit() {
	return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
  //Find out if the password is valid
 if(isPasswordValid()) {
    //Hide hint if valid
    $password.next().hide();
  } else{
      //else show the hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()){
    //Hide hint if match
    $confirmPassword.next().hide();
  } else{
    //else show the hint
      $confirmPassword.next().show();
   }
}

function enableSubmitEvent(){
	$("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
//Calling multiple handlers on the same event
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
  