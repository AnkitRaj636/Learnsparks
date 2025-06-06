// search.js

document.addEventListener("DOMContentLoaded", function () {
  const div = document.querySelector(".search-form");
  const input = div.querySelector("input");
  const resultsContainer = document.getElementById("search-results");

  // Handle form submission
  div.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
      // If already on search.html, just update results
      if (window.location.pathname.includes("search.html")) {
        showResults(query.toLowerCase());
        const newUrl = `search.html?q=${encodeURIComponent(query)}`;
        history.pushState(null, "", newUrl);
      } else {
        // Redirect to search page
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      }
    }
  });

  // On search.html, render results from query param
  const urlParams = new URLSearchParams(window.location.search);
  const queryFromURL = urlParams.get("q");
  if (resultsContainer && queryFromURL) {
    input.value = queryFromURL;
    showResults(queryFromURL.toLowerCase());
  }

  function showResults(query) {
    const courses = [
      {
        title: "Python Programming",
        link: "Python.html",
        description: "Learn the basics of Python programming.",
      },
      {
        title: "Web Development",
        link: "web-development.html",
        description: "HTML, CSS, and JS for building modern websites.",
      },
      {
        title: "Data Structure & Algorithms",
        link: "Data-Structure-Algorithm.html",
        description: "Analyze data and apply AI/ML techniques.",
      },
      {
        title: "C Programming",
        link: "c-programming.html",
        description: "Master fundamentals of C language.",
      },
          {
        title: "Data Science",
        link: "data-science.html",
        description: "Dive into data science concepts, tools, and real-world applications.",
      },
    ];

    const matches = courses.filter(course =>
      course.title.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<p>No results found for "<strong>${query}</strong>".</p>`;
    } else {
      resultsContainer.innerHTML = matches
        .map(
          course => `
          <div class="course-card">
            <h3><a href="${course.link}">${course.title}</a></h3>
            <p>${course.description}</p>
          </div>
        `
        )
        .join("");
    }
  }
});

// Using Typed.js or custom JS
new Typed('.scrolling-text', {
  strings: ['Learn anytime, anywhere.', 'Empowering future programmers.'],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});
