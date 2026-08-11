document.addEventListener("DOMContentLoaded", function () {

  // Step 1: Show SkillSpring splash for 3 seconds, then fade out
  setTimeout(function () {
    const mainPage = document.querySelector(".splash-screen");
    mainPage.classList.add("fade-out");

    // Step 2: After fade out, show loading screen
    setTimeout(function () {
      const loadingContainer = document.querySelector(".loading-container");
      loadingContainer.classList.add("active");

      // Step 3: After 2 seconds of loading, show first slide
      setTimeout(function () {
        loadingContainer.classList.remove("active");
        showSlide(0);
      }, 2000);
    }, 500); // Small delay for smooth transition
  }, 3000); // Show splash for 3 seconds
});