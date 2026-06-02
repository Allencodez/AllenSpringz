function getCurrentUser() {
  return JSON.parse(localStorage.getItem("skillspringCurrentUser"));
}

function protectPage() {
  const user = getCurrentUser();

  if (!user) {
    window.location.href = "auth.html";
  }
}



function getUsers() {
  return JSON.parse(localStorage.getItem("skillspringUsers")) || [];
}

function saveUsers(users) {
  localStorage.setItem("skillspringUsers", JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("skillspringCurrentUser"));
}

function setCurrentUser(user) {
  localStorage.setItem("skillspringCurrentUser", JSON.stringify(user));
}

function logout() {
  localStorage.removeItem("skillspringCurrentUser");
}