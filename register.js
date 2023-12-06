document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const rePasswordInput = document.getElementById("rePassword");
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    if (passwordInput.value !== rePasswordInput.value) {
      event.preventDefault(); // Prevent form submission
      showError("Passwords do not match");
    }
  });

  function showError(message) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;

    const errorContainer = document.getElementById("error-container");
    errorContainer.appendChild(errorMessage);

    // Remove the error message after 3 seconds
    setTimeout(function () {
      errorMessage.remove();
    }, 3000);
  }
});