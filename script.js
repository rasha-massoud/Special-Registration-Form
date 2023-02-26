let fname;
let lname;

let email;

let password;
let confirmPassword;

function validateForm() {
    // Get the form values
    fname = document.forms["registrationForm"]["fname"].value;
    lname = document.forms["registrationForm"]["lname"].value;

    email = document.forms["registrationForm"]["email"].value;
    password = document.forms["registrationForm"]["password"].value;
    confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;

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
        passwordStatus = CheckPassword(password);
    }

    if (passwordStatus != true) {
        alert("The password do not meet the conditions of characters between 8 to 15 containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.");
    }

    const data = {
        "firstName": fname,
        "lastName": lname,
        "email": email,
        "password": password,
    }
    const jsontext = document.createElement("div");
    jsontext.id = "jsontext";
    document.body.appendChild(jsontext);
    //convert JavaScript object to 
    const myJSON = JSON.stringify(data);

    location.href = 'waiting.html';
    // If all validation checks pass, submit the form
    return true;
}

function CheckPassword(password) {
    const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.match(decimal)) {
        return true;
    }
    else {
        return false;
    }
}

function submitingData() {
    location.href = "secondStep.html";
}

function numbersMergeSortAlgorithm() {
    const numbers = [];
    var number;

    for (var i = 0; i < 10; i++) {
        number = parseInt(window.prompt("Enter a number!", ""), 10);
        numbers[i] = number;
    }

    let sortedNumers = mergeSort(numbers);
    for (var i = 0; i < 10; i++) {
        console.log(sortedNumers[i]);
    }
}

function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const midPoint = Math.floor(unsortedArray.length / 2);
    const leftArr = unsortedArray.slice(0, midPoint);
    const rightArr = unsortedArray.slice(midPoint);

    return mergeTwoArrays(mergeSort(leftArr), mergeSort(rightArr));
}

function mergeTwoArrays(leftArr, rightArr) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArray.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    if (leftArr[leftIndex]) {
        var unaddedElements = leftArr.slice(leftIndex)
        resultArray.push(...unaddedElements);
    } else {
        var unaddedElements = rightArr.slice(rightIndex)
        resultArray.push(...unaddedElements);
    }

    return resultArray;
}

// function palindromeTest(){
//     let count=0;
//     const word = document.forms["registrationForm"]["stringInput"].value;

//     for(var i=0; i< (word.length/2); i++){
//         if (word[i]== word[-1-i]){
//             count++;
//         }
//     }
//     if (count== Math.floor((word.length/2))){
//         alert("The word you entered is palindrome!");
//     }else{
//         alert("The word you entered is NOT palindrome.");
//     }
// }

function palindromeTest() {
    const word = document.forms["registrationForm"]["stringInput"].value;
    const len = word.length;
    if (len == 0) {
        alert("The word you entered is palindrome!");
        return true;
    }

    return palindromeTestRecursive(word, 0, len - 1);
}

function palindromeTestRecursive(word, start, end) {
    if (end == 0 || end == 1 || start == end) {
        alert("The word you entered is palindrome!");
        return true;
    }
    if (word[start] == word[end]) {
        return palindromeTestRecursive(word, start + 1, end - 1);
    }
    alert("The word you entered is NOT a palindrome!");
    return false;
}

function primeAge() {
    const monthYear = document.forms["registrationForm"]["monthYearOfBirth"].value;
    let year = monthYear.slice(0, 4);
    let month = monthYear.slice(5, 7);

    let age = 0;
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;

    if (currentYear < year || (currentYear == year && currentMonth < month)) {
        alert("The date you entered is wrong!");
    }
    else {
        if (currentMonth >= month) {
            age = currentYear - year;
        }
        else {
            age = currentYear - year - 1;
        }
        let primeStatus = checkPrime(age);
        if (primeStatus) {
            alert("Your age is a prime number!");
        } else {
            alert("Your age is not a prime number!");
        }
    }
}

function checkPrime(age) {
    let countDiv = 0;
    if (age == 0 || age == 1 || age == 2) {
        return true;
    }
    for (var i = 1; i < age + 1; i++) {
        if (age % i == 0) {
            countDiv++;
        }
    }
    if (countDiv == 2) {
        return true;
    }
    return false;
}

class Course {

    courseName;
    courseCode;
    courseInstructor;

    constructor(courseName, courseCode, courseInstructor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.courseInstructor = courseInstructor;
    }

    introduceCourse() {
        document.getElementById("courseRepresentation").innerText = "The " + this.courseName + " course has the code " + this.courseCode + " and is taught by " + this.courseInstructor;
    }

}

function representCourse() {
    const course_name = document.forms["registrationForm"]["courseName"].value;
    const course_code = document.forms["registrationForm"]["courseCode"].value;
    const course_instructor = document.forms["registrationForm"]["courseInstructor"].value;

    let crs = new Course(course_name, course_code, course_instructor);
    console.log(course_name, course_code, course_instructor)
    crs.introduceCourse();
}