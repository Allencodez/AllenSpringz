function navigate(url) {

  const body = document.body;

  // Add fade-out animation
  body.classList.add("page-exit");

  // Wait for animation before redirect
  setTimeout(() => {
    window.location.href = url;
  }, 500);

}


// // PAGE ENTER ANIMATION ON LOAD
// document.addEventListener("DOMContentLoaded", () => {
//   requestAnimationFrame(() => {
//     document.body.classList.add("page-enter");
//   });
// });


function runEnterAnimation() {
  requestAnimationFrame(() => {
    document.body.classList.add("page-enter");
  });
}

// run immediately OR after DOM load (covers all cases)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runEnterAnimation);
} else {
  runEnterAnimation();
}


// Auto-enhance all links
document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll("a[data-nav]");

  links.forEach(link => {

    link.addEventListener("click", (e) => {

      e.preventDefault();

      const url = link.getAttribute("href");

      navigate(url);

    });

  });

});