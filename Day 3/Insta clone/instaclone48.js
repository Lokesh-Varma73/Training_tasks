document.addEventListener("DOMContentLoaded", function () {
    // Get the form and input elements
    const loginForm = document.getElementById('login-form');
    const usernameField = document.querySelector('input[type="text"]');
    const passwordField = document.querySelector('input[type="password"]');

    // Handle form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const username = usernameField.value.trim();
        const password = passwordField.value.trim();

        // Validate input fields
        if (username === '' || password === '') {
            alert('Please fill in both the username and password.');
        } else if (username === 'testuser' && password === 'password123') {
            alert('Login successful! Redirecting to Instagram...');
            window.location.href = "https://www.instagram.com/";
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    // Facebook login button
    const fbLoginButton = document.querySelector('.fb-login-btn');
    fbLoginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor action
        window.open('https://www.facebook.com/login/', '_blank');
    });

    // Forgot password link
    const forgotPasswordLink = document.querySelector('.forgot-password');
    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor action
        window.open('https://www.instagram.com/accounts/password/reset/?hl=en', '_blank');
    });

    // Input focus effects for better UX
    usernameField.addEventListener('focus', function () {
        usernameField.style.borderColor = '#0095f6'; // Instagram blue color
    });

    passwordField.addEventListener('focus', function () {
        passwordField.style.borderColor = '#0095f6';
    });

    usernameField.addEventListener('blur', function () {
        usernameField.style.borderColor = '#dbdbdb'; // Reset border color
    });

    passwordField.addEventListener('blur', function () {
        passwordField.style.borderColor = '#dbdbdb'; // Reset border color
    });
});
