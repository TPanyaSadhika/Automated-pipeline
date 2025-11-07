function showWelcomeMessage() {
    const today = new Date();
    document.getElementById("welcomeMessage").innerText = `Welcome! Today's date is ${today.toDateString()}`;
}

function highlightField(field) {
    field.style.backgroundColor = "#e0f7fa";
}

function validateEmpId() {
    let empId = document.getElementById("empId").value;
    let error = document.getElementById("empIdError");
    let regex = /^[a-zA-Z0-9]+$/;
    error.innerText = regex.test(empId) ? "" : "Invalid Employee ID";
}

function validateFullName() {
    let fullName = document.getElementById("fullName").value;
    let error = document.getElementById("fullNameError");
    let regex = /^[A-Za-z ]+$/;
    error.innerText = regex.test(fullName) ? "" : "Only alphabets allowed";
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    error.innerText = regex.test(email) ? "" : "Invalid email format";
}

function validateMobile() {
    let mobile = document.getElementById("mobile").value;
    let error = document.getElementById("mobileError");
    let regex = /^[0-9]{10}$/;
    error.innerText = regex.test(mobile) ? "" : "Enter a valid 10-digit number";
}

function validateYear() {
    let year = document.getElementById("year").value;
    let error = document.getElementById("yearError");
    let currentYear = new Date().getFullYear();
    error.innerText = year < currentYear ? "" : "Enter a past year";
}

function validateSalary() {
    let salary = document.getElementById("salary").value;
    let error = document.getElementById("salaryError");
    error.innerText = salary > 0 ? "" : "Enter a positive number";
}

function calculateTax() {
    let salary = parseFloat(document.getElementById("salary").value);
    let regime = document.getElementById("regime").value;
    let taxAmount = 0;
    
    if (regime === "old") {
        taxAmount = salary > 500000 ? salary * 0.2 : salary * 0.1;
    } else {
        taxAmount = salary > 700000 ? salary * 0.15 : salary * 0.05;
    }
    
    document.getElementById("resultBox").classList.remove("hidden");
    document.getElementById("taxResult").innerText = `Your calculated tax is: ₹${taxAmount.toFixed(2)}`;
}
