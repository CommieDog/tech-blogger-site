const signInForm = document.querySelector("#sign-in-form");
const signUpForm = document.querySelector("#sign-up-form");

function submitSignInForm(event)
{
    event.preventDefault();
    alert("submitSignInForm called!");
}

function submitSignUpForm(event)
{
    event.preventDefault();
    alert("submitSignUpForm called!");
}

signInForm.addEventListener("submit", submitSignInForm);
signUpForm.addEventListener("submit", submitSignUpForm);