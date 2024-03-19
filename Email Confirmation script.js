let emailInput = document.getElementById('emailAdd');
let emailConfirm = document.getElementById('confirmEmail');
let form = document.getElementById('formSubmit');

form.addEventListener('submit',checkEmail)

function checkEmail(event) {
    event.preventDefault();   
    if (emailInput.value !== emailConfirm.value) {
     alert("Email does not match.");
    } 
    else {
        alert("Form submitted successfully");
        form.submit();
    }
}