
/* Gets the theme toggle button from the HTML */
const themeToggle = document.getElementById("theme-toggle");

/* Loads the saved theme or uses light mode by default */
const savedTheme = localStorage.getItem("theme") || "light";

/* Applies the saved theme when the page loads */
document.documentElement.setAttribute("data-theme", savedTheme);

/* Updates the button text based on the current theme */
themeToggle.textContent =
  savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

/* Switches themes when the button is clicked */
themeToggle.addEventListener("click", function () {
  // Checks which theme is currently active
  const currentTheme =
    document.documentElement.getAttribute("data-theme");

  // Switches to the opposite theme
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Applies the selected theme to the page
  document.documentElement.setAttribute("data-theme", newTheme);

  // Saves the theme so it stays selected after refreshing
  localStorage.setItem("theme", newTheme);

  // Updates the button text
  themeToggle.textContent =
    newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
});
