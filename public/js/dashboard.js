const dashboard = document.querySelector("#dashboard");
const blogpostTitleField = document.querySelector("#blogpost-title");
const blogpostContentField = document.querySelector("#blogpost-content");

async function editBlogpost(event)
{
    if(event.target.classList.contains("edit-button"))
    {
        const postId = event.target.getAttribute("data-post-id");
        //const response = await fetch("post/edit/" + postId);
        //if(response.ok)
        //{
            console.log("Edit " + postId);
            //alert((await response.json()).message);
            //document.location.replace("/"); // Return to homepage
            //document.location.reload(); // Reload session to update login state on page
            // document.location.replace("/"); // Return to homepage...again. Don't ask me why this is necessary
            document.location.assign("post-edit/" + postId);
        //}
        //else
        //{
        //    alert("Error when creating post!");
        //    console.log((await response.json()).error);
        //}
    }
}

async function deleteBlogpost(event)
{
    if(event.target.classList.contains("delete-button"))
    {
        const postId = event.target.getAttribute("data-post-id");
        console.log("Delete " + postId);
    }
    /*const response = await fetch("api/posts/", {
        method: 'POST',
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
        alert("Error when creating post!");
        console.log((await response.json()).error);
    }*/
}

dashboard.addEventListener("click", editBlogpost);
dashboard.addEventListener("click", deleteBlogpost);