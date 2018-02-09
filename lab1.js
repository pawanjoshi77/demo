//create form handle

var formHandle = document.forms[0];

//create a function for on submit 

function submit_it ()

{
	//get user input for both feilds and hold in var
	var displayuser = formHandle.userauth__usertext;
	var displaypass = formHandle.userauth__userpasstext;
	//get ids 
	var out__user = document.getElementById ('userauth__userinputtext');
	var out__pass = document.getElementById ('userauth__userinputpass');


	//validate for empty feilds and turn red
	if(displayuser.value === "" ) {
		formHandle.userauth__usertext.style.backgroundColor = "red";
	}
	if(displaypass.value === "" ) {
		formHandle.userauth__userpasstext.style.backgroundColor = "red";
}
	out__user.innerHTML = displayuser.value;
	out__pass.innerHTML = displaypass.value;

	return false;
}

//call function

formHandle.onsubmit = submit_it;


//using JLint*******************************

var formHandle = document.forms[0];

function submit_it() {
    "use strict";
    var displayuser = formHandle.userauth__usertext;
    var displaypass = formHandle.userauth__userpasstext;
    var out__user = document.getElementById("userauth__userinputtext");
    var out__pass = document.getElementById("userauth__userinputpass");

    if (displayuser.value === "") {
        formHandle.userauth__usertext.style.backgroundColor = "red";
    }
    if (displaypass.value === "") {
        formHandle.userauth__userpasstext.style.backgroundColor = "red";
    }
    out__user.innerHTML = displayuser.value;
    out__pass.innerHTML = displaypass.value;


    return false;


}

formHandle.onsubmit = submit_it;


