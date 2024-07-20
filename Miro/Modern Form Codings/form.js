
function login() {
    var uname = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    if (uname == '' && password == '') {
        alert('Enter Your Details');
        return false;
    } else {
        alert('Successfully Verified');
        return true;
    }
}

var showPasswordIcon = document.getElementById('show-password');
var passwordField = document.getElementById('pass');

showPasswordIcon.addEventListener('click', function () {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
    // Add blinking class to the icon for animation
    showPasswordIcon.classList.add('blinking');

    // Remove blinking class after 1 second (1000 milliseconds)
    setTimeout(function() {
        showPasswordIcon.classList.remove('blinking');
    }, 1000);
});