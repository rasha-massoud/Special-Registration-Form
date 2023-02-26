function validateForm() {
    location.href = 'waiting.html';
    // Get the form values
    var fname = document.forms["registrationForm"]["fname"].value;
    var lname = document.forms["registrationForm"]["lname"].value;

    console.log(fname, lname);
    var email = document.forms["registrationForm"]["email"].value;

    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;

    // Check that all required fields are filled out
    if (fname == "" || lname == "" || email == "" || password == "" || confirmPassword == "") {
        alert("All fields are required. Please complete the form.");
        return false;
    }

    // Check that the email is properly formatted
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    var passwordStatus = false;
    // Check that the password and confirm password fields match
    if (password != confirmPassword) {
        alert("The password and confirm password fields do not match.");
        return false;
    }
    if (password == confirmPassword) {
        passwordStatus= CheckPassword(password);
    }

    if (passwordStatus != true) {
        alert("The password do not meet the conditions of characters between 8 to 15 containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.");
    }

    // If all validation checks pass, submit the form
    return true;
}

function CheckPassword(password) {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/ ;
    if (password.match(decimal)) {
        return true;
    }
    else {
        return false;
    }
}

