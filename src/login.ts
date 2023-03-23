
//get username element
const userName = document.getElementById('userName') as HTMLInputElement;

//get user pass element
const userPass = document.getElementById('pass') as HTMLInputElement;

//declare name & pass boolean
var judgeUser;
var judgePass;


function validateLogin() {

	//show if username is received
	console.log('username is : ' + userName.value)
	console.log('userPass is : ' + userPass.value)

	//show error
	if (userName.value === '') {
		document.getElementById('userError')!.style.display = 'block';
		// alert('invalid field')
		judgeUser = false
	}
	else {
		// alert('form submitted')
		judgeUser = true
	}

	// check password requirements [length= 8char, one Capaital & special char]
	let regexPass1 = /[A-Z]/;
	let regexPass2 = /[0-9]/;
	let regexPass3 = /[!\`\~\@\#\$\%\^\&\*\(\)\-\+\_\=\\\|\]\}\[\{\'\"\;\:\/\?\.\>\,\<]/;

	// if (regexPass1.test(userPass.value)) {

	// } else 
	if ((userPass.value.length >= 8) && (regexPass1.test(userPass.value)) && (regexPass2.test(userPass.value)) && (regexPass3.test(userPass.value))) {
		
		// alert('invalid field')
		judgePass = true
	}
	// for success
	else {
		document.getElementById('passError')!.style.display = 'block';
		judgePass = false
	}
	//return to form
	if ((judgeUser && judgePass) == true) {
		return true
	} else {
		return false
	}
}
