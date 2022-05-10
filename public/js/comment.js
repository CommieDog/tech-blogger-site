const blogpostId = document.querySelector("#blogpost").getAttribute("data-post-id");
const commentForm = document.querySelector("#comment-form");
const commentField = document.querySelector("#comment-field");

async function submitComment(event)
{
    event.preventDefault();
    console.log("Submitting comment! " + blogpostId);
    const response = await fetch("/api/comments/", {
        method: 'POST',
        body: JSON.stringify({ post_id: blogpostId, content: commentField.value.trim() }),
        headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok)
    {
       document.location.reload();
    }
    else
    {
        alert("Error when creating post!");
        console.log((await response.json()).error);
    }
}

commentForm.addEventListener("submit", submitComment);