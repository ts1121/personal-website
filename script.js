// Function to toggle light/dark mode
function toggleTheme() {
  const root = document.documentElement;
  const body = document.body;
  const currentTheme = root.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  root.setAttribute("data-bs-theme", newTheme);
  body.classList.toggle("bg-dark", newTheme === "dark");
  body.classList.toggle("text-light", newTheme === "dark");
  body.classList.toggle("text-dark", newTheme === "light");

  // Update icon (optional, if using moon/sun swap)
  const icon = document.querySelector('.theme-toggle i');
  if (icon) {
    icon.classList.remove('fa-moon', 'fa-sun');
    icon.classList.add(newTheme === 'dark' ? 'fa-sun' : 'fa-moon');
  }

  // Save user preference
  localStorage.setItem("theme", newTheme);
}

// Load saved theme preference on page load
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const root = document.documentElement;

  if (savedTheme) {
    root.setAttribute("data-bs-theme", savedTheme);
    document.body.classList.toggle("bg-dark", savedTheme === "dark");
    document.body.classList.toggle("text-light", savedTheme === "dark");
    document.body.classList.toggle("text-dark", savedTheme === "light");

    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
      icon.classList.remove('fa-moon', 'fa-sun');
      icon.classList.add(savedTheme === 'dark' ? 'fa-sun' : 'fa-moon');
    }
  }
};
