  function showMenu() {
      document.getElementById("navLinks").classList.toggle("show");
}

document.addEventListener("click", function(event) {
  const navLinks = document.getElementById("navLinks");
  const menuIcon = event.target.closest(".fa-bars");
  const clickedInsideNav = navLinks.contains(event.target);

  if (!clickedInsideNav && !menuIcon) {
    navLinks.classList.remove("show");
  }
});

