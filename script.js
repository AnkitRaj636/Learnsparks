// Wait until the DOM is fully loaded



document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Optional: Basic validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    // You can replace this with an actual submission (e.g., using fetch)
    alert("Thank you! Your message has been sent.");

    // Clear form
    form.reset();
  });
});

  const toggleBtn = document.getElementById("darkModeToggle");

  // Load mode from localStorage (optional)
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Save preference (optional)
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });