const updatePostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-name").value.trim();
  const description = document.querySelector("#post-description").value.trim();
  const content = document.querySelector("#post-content").value.trim();
  const id = document.querySelector("#post-content").getAttribute("data-id");
  console.log(id);

  if (title && description && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, content }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post");
    }
  }
};

document
  .querySelector("#update-button")
  .addEventListener("click", updatePostHandler);
