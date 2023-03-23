"use strict";
const userName = document.getElementById('userName');
const userPass = document.getElementById('pass');
var judgeUser;
var judgePass;
function validateLogin() {
    console.log('username is : ' + userName.value);
    console.log('userPass is : ' + userPass.value);
    if (userName.value === '') {
        document.getElementById('userError').style.display = 'block';
        judgeUser = false;
    }
    else {
        judgeUser = true;
    }
    let regexPass1 = /[A-Z]/;
    let regexPass2 = /[0-9]/;
    let regexPass3 = /[!\`\~\@\#\$\%\^\&\*\(\)\-\+\_\=\\\|\]\}\[\{\'\"\;\:\/\?\.\>\,\<]/;
    if ((userPass.value.length >= 8) && (regexPass1.test(userPass.value)) && (regexPass2.test(userPass.value)) && (regexPass3.test(userPass.value))) {
        judgePass = true;
    }
    else {
        document.getElementById('passError').style.display = 'block';
        judgePass = false;
    }
    if ((judgeUser && judgePass) == true) {
        return true;
    }
    else {
        return false;
    }
}
