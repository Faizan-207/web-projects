document.addEventListener('DOMContentLoaded',()=>{
    const wrapper = document.querySelector('.wrapper');
    const signUpLink = document.querySelector('.signUp-link');
    const signInLink = document.querySelector('.signIn-link');

    // Get the show password checkboxes
    const showPasswordSignUp = document.querySelector('#showPasswordSignUp');
    const showPasswordSignIn = document.querySelector('#showPasswordSignIn');

    // Get the password input fields
    const passwordSignUp = document.querySelector('.password-signup');
    const passwordSignIn = document.querySelector('.password-signin');

    // Toggle password visibility
    showPasswordSignUp.addEventListener('change', () => {
        passwordSignUp.type = showPasswordSignUp.checked ? 'text' : 'password';
    });

    showPasswordSignIn.addEventListener('change', () => {
        passwordSignIn.type = showPasswordSignIn.checked ? 'text' : 'password';
    });

    signUpLink.addEventListener('click', () => {
        wrapper.classList.add('animate-signIn');
        wrapper.classList.remove('animate-signUp');
    });

    signInLink.addEventListener('click', () => {
        wrapper.classList.add('animate-signUp');
        wrapper.classList.remove('animate-signIn');
    });

    if (window.location.hash === '#sign-up') {
        wrapper.classList.add('animate-signIn');
        wrapper.classList.remove('animate-signUp');
    } else {
        wrapper.classList.add('animate-signUp');
        wrapper.classList.remove('animate-signIn');
    }
});