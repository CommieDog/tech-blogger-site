const logoutButton = document.querySelector("#logout-button");

async function doLogout()
{
    const response = await fetch("api/users/logout/", {
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok)
    {
        document.location.replace("/"); // Return to homepage
    }
    else
    {
        alert((await response.json()).message);
    }
}

logoutButton.addEventListener("click", doLogout);