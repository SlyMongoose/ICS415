

function getClasses(elem) {
    var classes;

    classes = elem.className.split(" ");

    return classes;
}

function addClass(elem, className) {

    if (elem.hasAttribute("class") != false) {
        elem.className += " " + className;
    }
    else {
        elem.setAttribute("class", className);
    }


    return elem;
}

function validateForm() {
    var errs;

    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var pass1 = document.forms["myForm"]["password"].value;
    var pass2 = document.forms["myForm"]["confirm"].value;

    if (name == null || name == "") {
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("warning1").innerHTML = "You cannot leave the NAME field blank!";
    }

    if (email == null || email == "") {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("warning2").innerHTML = "You cannot leave the EMAIL field blank!";
    }

    if (pass1 == null || pass1 == "") {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("warning3").innerHTML = "You must enter a password";
    }

    if (pass2 == null || pass2 == "") {
        document.getElementById("confirm").style.borderColor = "red";
        document.getElementById("warning4").innerHTML = "you must confirm your password!";
    }

    if (pass1 != null && pass2 != null && pass1 != pass2) {
        document.getElementById("warning5").innerHTML = "your confirmation password did not match your original password :(";
    }
    return false;
}

