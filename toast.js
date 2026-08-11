function showToast(message, type = "info", duration = 3000) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const icons = {
    success: "✓",
    error: "✕",
    warning: "!",
    info: "★"
  };

  const toast = document.createElement("div");
  toast.className = `skillspring-toast toast-${type}`;

  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || "★"}</div>
    <div class="toast-message">${message}</div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("toast-show");
  });

  const autoDismiss = setTimeout(() => {
    toast.classList.remove("toast-show");
    toast.classList.add("toast-hide");
    toast.addEventListener("transitionend", () => toast.remove());
  }, duration);
}