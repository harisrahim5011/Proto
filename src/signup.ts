/**
 * validation same as login page.
 */


//get username element
const userNameSign = document.getElementById('user') as HTMLInputElement;

//get user pass element
const userPassSign = document.getElementById('pass') as HTMLInputElement;

//get user pass match element
const userPassMatch = document.getElementById('confPass') as HTMLInputElement;

//declare name & pass boolean
var judgeUser;
var judgePass;
var judgePassMatch;

// validate();

function validateSignUp() {

	//show if username is received
	console.log('username is : ' + userNameSign.value)
	console.log('userPass is : ' + userPassSign.value)
	console.log('userPass is : ' + userPassMatch.value)

	//show error
	if (userNameSign.value === '') {
		document.getElementById('userError')!.style.display = 'block';
		// alert('invalid field')
		console.log('user name invalid')
		judgeUser = false
	}
	else {
		// alert('form submitted')
		judgeUser = true
		console.log('user name valid')
	}

	// check password requirements [length= 8char, one Capaital & special char]
	let regexPass1 = /[A-Z]/;
	let regexPass2 = /[0-9]/;
	let regexPass3 = /[!\`\~\@\#\$\%\^\&\*\(\)\-\+\_\=\\\|\]\}\[\{\'\"\;\:\/\?\.\>\,\<]/;

	// if (regexPass1.test(userPass.value)) {

	// } else 
	if (( userPassSign.value.length >= 8) &&
		(regexPass1.test( userPassSign.value)) &&
		(regexPass2.test( userPassSign.value)) &&
		(regexPass3.test( userPassSign.value))) {

		// alert('invalid field')
		console.log('password valid')
		judgePass = true
	}
	// for success
	else {
		document.getElementById('passError')!.style.display = 'block';
		judgePass = false
		console.log('password invalid')
	}
	if ( userPassSign.value === userPassMatch.value) {

		// alert('invalid field')
		console.log('password match')
		judgePassMatch = true
	}
	// for success
	else {
		document.getElementById('confPassError')!.style.display = 'block';
		judgePassMatch = false
		console.log('password mismatch')
	}
	//return to form
	if ((judgeUser && judgePass && judgePassMatch) == true) {
		return true
	} else {
		return false
	}
}

// export{userName,}
/**
 * different kind of validation.
 */
// //show error
// function validateUser() {
// 	// check email syntax
// 	let user = document.getElementById('user').value;
// 	let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

// 	if (!(regex.test(user))) {
// 		document.getElementById('userError').style.display = 'block';
// 	// }
// 	// return true;
// 	} else {
// 		document.getElementById('userError').style.display = 'none';
// 		return false;
// 	}
// 	// v1 = true;
// }
// function validatePass() {
// 	let pass = document.getElementById('pass').value;
// 	// check password requirements [length= 8char, one Capaital & special char]
// 	let regexPass1 = /[A-Z]/;
// 	let regexPass2 = /[0-9]/;
// 	let regexPass3 = /[!\`\~\@\#\$\%\^\&\*\(\)\-\+\_\=\\\|\]\}\[\{\'\"\;\:\/\?\.\>\,\<]/;

// 	if (!(((pass.length >= 8) && (regexPass1.test(pass)) && (regexPass2.test(pass)) && (regexPass3.test(pass))))) {

// 		document.getElementById('passError').style.display = 'block';
// 	// }
// 	// 	return true;
// 	} else {
// 		document.getElementById('passError').style.display = 'none';
// 		// return false;
// 	}
// 	// v2 = true;
// }

// function validateconfPass() {
// 	let confPass = document.getElementById('confPass').value;
// 	if ((confPass == pass)) {
// 		document.getElementById('confPassError').style.display = 'none';
// 		// return true;
// 	} else {
// 		document.getElementById('confPassError').style.display = 'block';
// 		// return false;
// 	}
// 	// v3 = true;
// }

// function validate() {
// 	let v1 = validateUser()
// 	let v2 = validatePass()
// 	let v3 = validateconfPass();
// 	console.log(v1)
// 	if (v1 && v2 && v3 == true) {
// 		// document.getElementById('submitBtn').disabled = false;
// 		alert('success')
// 	} else {
// 		alert('unsuccess..')
// 	}

// 	// else {
// 	// window.alert('login successful');

// }
// }

//require a callback function 
