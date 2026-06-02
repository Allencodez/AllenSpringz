protectPage(); // 👈 MUST BE FIRST LINE

// ================================
// CURRENT USER
// ================================

window.addEventListener("DOMContentLoaded", () => {

  const currentUser = JSON.parse(
    localStorage.getItem("skillspringCurrentUser")
  );

  const welcomeMessage =
    document.getElementById("welcomeMessage");

  if (currentUser && welcomeMessage) {
    welcomeMessage.textContent =
      `Welcome back, ${currentUser.name}!`;
  }

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

  });

  


  }
);

// ================================
// SEARCH BUTTON FUNCTIONALITY
// ================================

searchBtn.addEventListener("click", () => {

  searchInput.dispatchEvent(
    new Event("input")
  );

});

// const courseButtons =
//   document.querySelectorAll(".course-btn");

// courseButtons.forEach(button => {

//   button.addEventListener("click", () => {

//     const course =
//       button.dataset.course;

//     localStorage.setItem(
//       "selectedCourse",
//       course
//     );

//     window.location.href =
//       "course-detail.html";

//   });

// });


const courseButtons = document.querySelectorAll(".course-btn");

courseButtons.forEach(button => {
  button.addEventListener("click", () => {
    const courseId = button.dataset.id;

    localStorage.setItem("selectedCourse", courseId);

    window.location.href = `course-detail.html?id=${courseId}`;
  });
});