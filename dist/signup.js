"use strict";
const userNameSign = document.getElementById('user');
const userPassSign = document.getElementById('pass');
const userPassMatch = document.getElementById('confPass');
var judgeUser;
var judgePass;
var judgePassMatch;
function validateSignUp() {
    console.log('username is : ' + userNameSign.value);
    console.log('userPass is : ' + userPassSign.value);
    console.log('userPass is : ' + userPassMatch.value);
    if (userNameSign.value === '') {
        document.getElementById('userError').style.display = 'block';
        console.log('user name invalid');
        judgeUser = false;
    }
    else {
        judgeUser = true;
        console.log('user name valid');
    }
    let regexPass1 = /[A-Z]/;
    let regexPass2 = /[0-9]/;
    let regexPass3 = /[!\`\~\@\#\$\%\^\&\*\(\)\-\+\_\=\\\|\]\}\[\{\'\"\;\:\/\?\.\>\,\<]/;
    if ((userPassSign.value.length >= 8) &&
        (regexPass1.test(userPassSign.value)) &&
        (regexPass2.test(userPassSign.value)) &&
        (regexPass3.test(userPassSign.value))) {
        console.log('password valid');
        judgePass = true;
    }
    else {
        document.getElementById('passError').style.display = 'block';
        judgePass = false;
        console.log('password invalid');
    }
    if (userPassSign.value === userPassMatch.value) {
        console.log('password match');
        judgePassMatch = true;
    }
    else {
        document.getElementById('confPassError').style.display = 'block';
        judgePassMatch = false;
        console.log('password mismatch');
    }
    if ((judgeUser && judgePass && judgePassMatch) == true) {
        return true;
    }
    else {
        return false;
    }
}
