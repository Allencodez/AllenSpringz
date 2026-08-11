document.addEventListener("DOMContentLoaded", () => {

  const nextBtn =
    document.querySelector(".next-btn");

  const skipBtn =
    document.querySelector(".skip-btn");

  const page =
    document.querySelector(".onboarding");

  // =========================
  // NEXT BUTTON TRANSITION
  // =========================
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();

      page.classList.add("page-fade-out");

      setTimeout(() => {
        window.location.href = nextBtn.href;
      }, 500);
    });
  }

  // =========================
  // SKIP BUTTON TRANSITION
  // =========================
  if (skipBtn) {
    skipBtn.addEventListener("click", (e) => {
      e.preventDefault();

      page.classList.add("page-fade-out");

      setTimeout(() => {
        window.location.href = skipBtn.href;
      }, 500);
    });
  }

});