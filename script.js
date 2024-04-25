const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');

const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const rePassword = document.getElementById('re-password').value;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


signinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === ''|| password === '') {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    } else {
        alert('Đăng nhập thành công!');
        return;
    }
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    
    if (username === ''|| password === '' || rePassword ==='' || email ==='') {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return false;
    }
    else if (password.length < 8) {
        alert('Mật khẩu phải có ít nhất 8 ký tự.');
        return false;
    }
    else if (!email.match(emailPattern)) {
        alert('Email không hợp lệ.');
        return false;
    }
    else if (password !== rePassword) {
        alert('Mật khẩu không khớp!');
        return false;
    } else {
    alert('Đăng kí thành công!');
    return true;
    }
});

const btnRegister = document.getElementById('other');
const btnRegister2 = document.getElementById('other2');

const formRegister = document.getElementById('form-register');
const formSignIn = document.getElementById('form-signin');

btnRegister.addEventListener('click', () => {
    formRegister.classList.toggle('hidden');
    formSignIn.classList.toggle('hidden');
});

btnRegister2.addEventListener('click', () => {
    formRegister.classList.toggle('hidden');
    formSignIn.classList.toggle('hidden');
});

const openEye = document.getElementById('eye-open');
const closeEye = document.getElementById('eye-close');

openEye.addEventListener('click', () => {
});

closeEye.addEventListener('click', () => {
    openEye.classList.toggle('hidden');
    closeEye.classList.toggle('hidden');
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
};


