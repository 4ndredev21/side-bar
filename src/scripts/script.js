const toggleButton = document.getElementById("toggle_button");
const sidebar = document.getElementById("sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("open_sidebar");

  const icon = document.getElementById("toggle_icon");
  if (sidebar.classList.contains("open_sidebar")) {
    icon.classList.replace("fa-circle-chevron-right", "fa-circle-chevron-left");
  } else {
    icon.classList.replace("fa-circle-chevron-left", "fa-circle-chevron-right");
  }
});
