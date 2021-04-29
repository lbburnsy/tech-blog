const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-name").value.trim();
  const description = document.querySelector("#post-description").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  if (title && description && content) {
    const response = await fetch("/api/posts", {
      method: "POST",
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id") && event.target.id == "delete") {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newPostHandler);

document
  .querySelector(".post-list")
  .addEventListener("click", delButtonHandler);

