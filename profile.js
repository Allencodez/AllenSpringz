// // Get all users from localStorage
// function getUsers() {
//   return JSON.parse(localStorage.getItem("users")) || [];
// }

// // Save users back to localStorage
// function saveUsers(users) {
//   localStorage.setItem("users", JSON.stringify(users));
// }

// // Save current logged-in user session
// function setCurrentUser(user) {
//   localStorage.setItem("currentUser", JSON.stringify(user));
// }

// // Get current logged-in user
// function getCurrentUser() {
//   return JSON.parse(localStorage.getItem("currentUser"));
// }

// // Logout user
// function logout() {
//   localStorage.removeItem("currentUser");
// }







const user = getCurrentUser();

if (user) {
  document.getElementById("username").textContent = user.name;

  document.getElementById("bio").textContent =
    user.bio || "No bio yet";

  document.getElementById("avatar").src =
    user.avatar || "./assets/icon/profile-img.jpg";

     const emailEl = document.querySelector(".profile-email");
  if (emailEl) {
    emailEl.textContent = user.email || "";
  }
}