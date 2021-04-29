const commentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#post-content").value.trim();
  const id = document.querySelector("#post_id").value;

  if (content) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ content, post_id: id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  } else {
    alert("You must enter a comment to comment");
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", commentFormHandler);
