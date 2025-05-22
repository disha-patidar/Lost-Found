function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("show");
}

// Optional: close dropdown when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
}
