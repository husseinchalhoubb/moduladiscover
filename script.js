const titleElement = document.querySelector(".file4-title");
const textElement = document.querySelector(".file4-text");
const subscribeButton = document.querySelector(".file4-subscribe-button");

// Function to fetch and update content
function updateContent() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      titleElement.textContent = data.title;
      textElement.textContent = data.text;
      subscribeButton.textContent = data.subscribeButtonText;
    });
}

// Call the function on page load
updateContent();
