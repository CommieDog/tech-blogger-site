const signInForm = document.querySelector("#sign-in-form");
const signUpForm = document.querySelector("#sign-up-form");
const signInEmailField = document.querySelector("#sign-in-email");
const signInPasswordField = document.querySelector("#sign-in-password");
const signUpUsernameField = document.querySelector("#sign-up-username");
const signUpEmailField = document.querySelector("#sign-up-email");
const signUpPasswordField = document.querySelector("#sign-up-password");

async function submitSignInForm(event)
{
    event.preventDefault();
    const response = await fetch("api/users/login/", {
        method: 'POST',
        body: JSON.stringify({ email: signInEmailField.value.trim(), password: signInPasswordField.value.trim() }),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok)
    {
        document.location.replace("/"); // Return to homepage
    }
    else
    {
        alert("Unable to sign in");
    }
}

async function submitSignUpForm(event)
{
    event.preventDefault();
    const response = await fetch("api/users/signup/", {
        method: 'POST',
        body: JSON.stringify({ username: signUpUsernameField.value.trim(), email: signUpEmailField.value.trim(), password: signUpPasswordField.value.trim() }),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok)
    {
        document.location.replace("/"); // Return to homepage
    }
    else
    {
        alert("Unable to sign up");
    }
}

signInForm.addEventListener("submit", submitSignInForm);
signUpForm.addEventListener("submit", submitSignUpForm);