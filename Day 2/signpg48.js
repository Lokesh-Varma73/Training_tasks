window.onload = function () {
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const form = document.querySelector('.form');
    
    loginLink.onclick = function (e) {
        e.preventDefault();
        toggleLinks(loginLink, registerLink);
        form.querySelector('.login-btn').textContent = 'Login';
    };

    registerLink.onclick = function (e) {
        e.preventDefault();
        toggleLinks(registerLink, loginLink);
        form.querySelector('.login-btn').textContent = 'Register';
    };

    function toggleLinks(active, inactive) {
        active.classList.add('active');
        inactive.classList.remove('active');
    }

    form.onsubmit = function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email || !password) {
            alert('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Invalid email format.');
            return;
        }

        alert('Form submitted!');
    };

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
};
