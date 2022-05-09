const dashboard = document.querySelector("#dashboard");
const blogpostTitleField = document.querySelector("#blogpost-title");
const blogpostContentField = document.querySelector("#blogpost-content");

async function editBlogpost(event)
{
    if(event.target.classList.contains("edit-button"))
    {
        const postId = event.target.getAttribute("data-post-id");
        document.location.assign("post-edit/" + postId);
        event.stopPropagation();
    }
}

async function deleteBlogpost(event)
{
    if(event.target.classList.contains("delete-button"))
    {
        event.preventDefault();
        const postId = event.target.getAttribute("data-post-id");
        const response = await fetch("/api/posts/" + postId, {
            method: 'DELETE',
        });
        if(response.ok)
        {
            document.location.assign("/dashboard");
        }
        else
        {
            alert("Error when deleting post!");
            console.log((await response.json()).error);
        }
        event.stopPropagation();
    }
}

dashboard.addEventListener("click", editBlogpost);
dashboard.addEventListener("click", deleteBlogpost);