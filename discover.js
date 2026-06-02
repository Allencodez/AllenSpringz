const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});



// ================================
// SEARCH FUNCTIONALITY
// ================================

const searchInput =
  document.querySelector(".search-box input");

const searchBtn =
  document.querySelector(".search-btn");

const courseCards =
  document.querySelectorAll(".course-card");

const coursesCount =
  document.querySelector(".courses-count");

// CATEGORY HEADERS

const webHeader =
  document.querySelector(".category-header");

const designHeader =
  document.querySelector(".category-header-2");

// COURSE GRIDS

const webGrid =
  document.querySelectorAll(".courses-grid")[0];

const designGrid =
  document.querySelectorAll(".courses-grid")[1];

searchInput.addEventListener("input", (e) => {

  const value =
    e.target.value.toLowerCase().trim();

  let visibleCount = 0;

  let webCount = 0;
  let designCount = 0;

  courseCards.forEach(card => {

    const text =
      card.innerText.toLowerCase();

    const match =
      text.includes(value);

    card.style.display =
      match ? "block" : "none";

    if (match) {

      visibleCount++;

      // CATEGORY CHECK

      if (
        text.includes("web development")
      ) {
        webCount++;
      }

      if (
        text.includes("product design")
      ) {
        designCount++;
      }

    }

  });

  // UPDATE COURSE COUNT

  coursesCount.textContent =
    `Showing ${visibleCount} courses`;

  // SHOW/HIDE CATEGORIES

  if (value !== "") {

    webHeader.style.display =
      webCount > 0 ? "flex" : "none";

    webGrid.style.display =
      webCount > 0 ? "grid" : "none";

    designHeader.style.display =
      designCount > 0 ? "flex" : "none";

    designGrid.style.display =
      designCount > 0 ? "grid" : "none";

  } else {

    // RESET DEFAULT VIEW

    webHeader.style.display = "flex";
    webGrid.style.display = "grid";

    designHeader.style.display = "flex";
    designGrid.style.display = "grid";

  }

});

// ================================
// SEARCH BUTTON FUNCTIONALITY
// ================================

searchBtn.addEventListener("click", () => {

  searchInput.dispatchEvent(
    new Event("input")
  );

});





// document.querySelectorAll(".course-btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     window.location.href = "course-detail.html";
//   });
// });


// dynamic course detail rendering










// document.querySelectorAll(".course-btn").forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     const id = e.currentTarget.dataset.id;

//     window.location.href = `course-detail.html?id=${id}`;
//   });
// });


/*
----------------------------------------
COURSE CARD NAVIGATION
----------------------------------------
When user clicks a course button,
send the course id to course-detail page.
----------------------------------------
*/

const courseButtons = document.querySelectorAll(".course-btn");

courseButtons.forEach(button => {

  button.addEventListener("click", () => {

    const courseId = button.dataset.id;

    window.location.href =
      `course-detail.html?id=${courseId}`;

  });

});