document.addEventListener("DOMContentLoaded", () => {

  const splashScreen =
    document.querySelector(".splash-screen");

  const loadingScreen =
    document.querySelector(".loading-container");

  // Show landing for 2.5 seconds
  setTimeout(() => {

    // Fade out landing
    splashScreen.classList.add("fade-out");

    // Wait for fade animation
    setTimeout(() => {

      // Show loader
      loadingScreen.classList.add("active");

      // Loader runs for 2 seconds
      setTimeout(() => {

        window.location.href =
          "onboarding1.html";

      }, 2000);

    }, 500);

  }, 2500);

});