const blogpostForm = document.querySelector("#blogpost-form");
const blogpostTitleField = document.querySelector("#blogpost-title");
const blogpostContentField = document.querySelector("#blogpost-content");

async function editBlogpost(event)
{
    event.preventDefault();
    const postId = blogpostForm.getAttribute("data-post-id");
    const response = await fetch("/api/posts/" + postId, {
        method: 'PUT',
        body: JSON.stringify({ title: blogpostTitleField.value.trim(), content: blogpostContentField.value.trim() }),
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
        alert("Error when updating post!");
        console.log((await response.json()).error);
    }
}

blogpostForm.addEventListener("submit", editBlogpost);