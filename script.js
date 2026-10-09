
/* Gets the theme toggle button */
const themeToggle = document.querySelector("#theme-toggle");

/* Loads the saved theme from localStorage */
function retrieveTheme() {
  const theme = localStorage.getItem("website_theme");

  /* Applies the saved theme when one exists */
  document.body.classList.remove("dark_mode");

  if (theme === "dark_mode") {
    document.body.classList.add("dark_mode");
  }

  /* Updates the button label */
  themeToggle.textContent =
    document.body.classList.contains("dark_mode")
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
}

/* Switches themes when the button is clicked */
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark_mode");

  /* Saves the selected theme */
  if (document.body.classList.contains("dark_mode")) {
    localStorage.setItem("website_theme", "dark_mode");
  } else {
    localStorage.setItem("website_theme", "default");
  }

  /* Updates the button label */
  retrieveTheme();
});

/* Restores the saved theme when the page loads */
retrieveTheme();

/* Synchronizes the theme if it changes in another tab */
window.addEventListener("storage", function () {
  retrieveTheme();
});
