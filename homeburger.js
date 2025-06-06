document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", function () {
    links.classList.toggle("show");
  });
});
// Add this to your homeburger.js or inside a <script> with defer attribute
document.addEventListener('DOMContentLoaded', () => {
  const dropdownBtn = document.querySelector('.nav-links li.dropdown > button');
  dropdownBtn?.addEventListener('click', () => {
    const dropdownLi = dropdownBtn.parentElement;
    dropdownLi.classList.toggle('open');
    // Optionally toggle arrow rotation
    if (dropdownLi.classList.contains('open')) {
      dropdownBtn.style.transform = 'rotate(180deg)';
    } else {
      dropdownBtn.style.transform = 'rotate(0deg)';
    }
  });
});
