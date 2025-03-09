// Selecting elements
const passwordField = document.getElementById("password");
const toggleBtn = document.querySelector(".toggle-btn i");

// Adding click event to toggle the password visibility
toggleBtn.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text"; // Change to text
    toggleBtn.classList.replace("fa-eye", "fa-eye-slash"); // Change icon to eye-slash
  } else {
    passwordField.type = "password"; // Change back to password
    toggleBtn.classList.replace("fa-eye-slash", "fa-eye"); // Change icon back to eye
  }
});
