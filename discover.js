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




const searchLoading =
  document.getElementById("searchLoading");

function startSearch() {

  searchLoading.classList.remove("hidden");

  setTimeout(() => {

    runSearch();

    searchLoading.classList.add("hidden");

  }, 500);

}





function runSearch() {
  const value = searchInput.value.toLowerCase().trim();

  let visibleCount = 0;
  let webCount = 0;
  let designCount = 0;

  courseCards.forEach(card => {
    const category = card.dataset.category || "";
    const title = card.dataset.title || "";
    const mentor = card.dataset.mentor || "";

    const searchableText =
      `${category} ${title} ${mentor}`.toLowerCase();

    const match = searchableText.includes(value);

    card.hidden = !match;

    if (match) {
      visibleCount++;

      if (category === "web") webCount++;
      if (category === "design") designCount++;
    }
  });

  coursesCount.textContent = `Showing ${visibleCount} courses`;

  webHeader.style.display = webCount > 0 ? "flex" : "none";
  webGrid.style.display = webCount > 0 ? "grid" : "none";

  designHeader.style.display = designCount > 0 ? "flex" : "none";
  designGrid.style.display = designCount > 0 ? "grid" : "none";
}











// ================================
// SEARCH BUTTON FUNCTIONALITY
// ================================

// searchInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     runSearch();
//   }
// });

searchBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevents any default button behavior
  startSearch();
});




// prevent page reload when search input is cleared

searchInput.addEventListener("input", () => {

  const value = searchInput.value.trim();

  if (value === "") {

    // reset loader if visible
    searchLoading.classList.add("hidden");

    // reset all cards
    courseCards.forEach(card => {
      card.hidden = false;
    });

    // reset counters
    coursesCount.textContent = `Showing ${courseCards.length} courses`;

    // restore categories
    webHeader.style.display = "flex";
    designHeader.style.display = "flex";

    webGrid.style.display = "grid";
    designGrid.style.display = "grid";
  }

});




//enter key load search

searchInput.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {

    e.preventDefault();

    startSearch();

  }

});


// dynamic course detail rendering




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


