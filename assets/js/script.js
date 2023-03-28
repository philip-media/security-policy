document.getElementById("date").innerHTML = new Date().getFullYear();
anchors.add("h1, h2, h3, h4");
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkMode) {
  document.documentElement.setAttribute("data-color-mode", "dark");
  document.documentElement.setAttribute("data-dark-theme", "dark");
} else {
  document.documentElement.setAttribute("data-color-mode", "light");
  document.documentElement.setAttribute("data-dark-theme", "light");
}
