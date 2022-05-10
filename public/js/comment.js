const commentForm = document.querySelector("#comment-form");
const commentField = document.querySelector("#comment-field");

async function submitComment(event)
{
    event.preventDefault();
    console.log("Submitting comment!");
    return;
    const response = await fetch("api/posts/", {
        method: 'POST',
        body: JSON.stringify({ content: commentField.value.trim() }),
        headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok)
    {
        //alert((await response.json()).message);
        //document.location.replace("/"); // Return to homepage
        //document.location.reload(); // Reload session to update login state on page
       // document.location.replace("/"); // Return to homepage...again. Don't ask me why this is necessary
       document.location.assign("/dashboard");
    }
    else
    {
        alert("Error when creating post!");
        console.log((await response.json()).error);
    }
}

commentForm.addEventListener("submit", submitComment);