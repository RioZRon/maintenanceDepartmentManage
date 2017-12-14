/**
 * Created by riosysm on 2017/11/27.
 */
function vilidate_form(){
    //如果不加注释里的focus就不会自动提交表
    var login = document.getElementById("user[login]");
    var email = document.getElementById("user[email]");
    var password = document.getElementById("user[password]");
    if(validate_username() == false){
        //document.getElementById("user[login]").focus();
        login.focus();
        return false;}
    else if(validate_email() == false){
        email.focus();
        //document.getElementById("user[emal]").focus();
            return false;}
    else if(validate_password() == false){
        password.focus();
        //document.getElementById("user[password]").focus();
        return false;}
    else{
        return true;
    }
}


function validate_username(){
    //document.write("This");
    var RegExp = /^[a-zA-Z][a-zA-Z_]*[a-zA-Z]$/;
    var Object = document.getElementById("user[login]");
    var loginnote = document.getElementById("loginnote");
    with(Object){
        if(value == null || value ==""){
            loginnote.innerHTML= "<p class='note'>This will be your username. You can add the name of your organization later.</p>";
            return false;
        }else if(RegExp.test(value) == false) {
            loginnote.innerHTML = "<p class='note modify'>Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen</p>";
            return false;
        }else if(value.length >18 || value.length<6){
            loginnote.innerHTML = "<p class='note modify'>Username must less than 18 and longer than 6 </p>";
            return false;
        }else{
            loginnote.innerHTML= "<p class='note seccess'>Right</p>";
            return true
        }
    }
}

function validate_email(){
    var RegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
    var Object = document.getElementById("user[email]");
    var emailnote = document.getElementById("emailnote");
    with(Object){
        if(value == null || value == ""){
            emailnote.innerHTML= "<p class='note modify'>Email adress must be filled </p>";
            return false;
        }else if(RegExp.test(value) == false){
            emailnote.innerHTML = "<p class='note modify'>Email is invalid</p>";
            return false;
        }else{
            emailnote.innerHTML="<p class='note seccess'>Rigth</p>";
            return true;
        }
    }
}

function validate_password(){
    var RegExp = /^\w+$/;
    var RegExp2 = /^.*[0-9]+.*$/;
    var RegExp3 = /^.*[a-zA-Z]+.*$/;

    var Object = document.getElementById("user[password]");
    var passwordnote = document.getElementById("passwordnote");
    with(Object){
        if(value == null || value == ""){
            passwordnote.innerHTML="<p class='note'>Use at least one letter, one numeral, and seven characters.</p>";
            return false;
        }else if(value.match(RegExp2) == null||value.match(RegExp3) == null || RegExp.test(value) == false ) {
            passwordnote.innerHTML = "<p class='note modify'>Password is invalid</p>";
            return false;
        }else{
            passwordnote.innerHTML="<p class='note seccess'>Rigth</p>";
            return true;
        }
    }


}

function showhide_password(Obj){
    var pwd=document.getElementById("user[password]");
    if(Obj.checked){
        pwd.type="text";
    }
    else
    {
        pwd.type="password";
    }
}
