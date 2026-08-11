function initSearch({
  inputSelector,
  buttonSelector,
  cardSelector,
  emptyStateSelector,
  loadingSelector
}) {
  const searchInput = document.querySelector(inputSelector);
  const searchBtn = document.querySelector(buttonSelector);
  const cards = document.querySelectorAll(cardSelector);
  const emptyState = document.querySelector(emptyStateSelector);
  const loading = document.querySelector(loadingSelector);

  function runSearch() {
    const value = searchInput.value.toLowerCase().trim();
    let foundMatch = false;

    if (value === "") {
      cards.forEach(card => (card.style.display = "block"));
      emptyState.style.display = "none";
      return;
    }

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      const match = text.includes(value);

      card.style.display = match ? "block" : "none";
      if (match) foundMatch = true;
    });

    emptyState.style.display = foundMatch ? "none" : "block";
  }

  function startSearch() {
    loading.classList.remove("hidden");

    setTimeout(() => {
      runSearch();
      loading.classList.add("hidden");
    }, 400);
  }

  searchBtn?.addEventListener("click", startSearch);

  searchInput?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      startSearch();
    }
  });

  searchInput?.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
      cards.forEach(card => (card.style.display = "block"));
      emptyState.style.display = "none";
    }
  });
}