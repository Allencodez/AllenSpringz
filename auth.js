const tabs = document.querySelectorAll(".tab");
const signupForm = document.getElementById("signupForm");
const signinForm = document.getElementById("signinForm");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    if (tab.dataset.tab === "signup") {
      signupForm.classList.add("active-form");
      signinForm.classList.remove("active-form");
    } else {
      signinForm.classList.add("active-form");
      signupForm.classList.remove("active-form");
    }
  });
});

const toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const input = toggle.previousElementSibling;

    if (input.type === "password") {
      input.type = "text";
      toggle.classList.remove("fa-eye-slash");
      toggle.classList.add("fa-eye");
    } else {
      input.type = "password";
      toggle.classList.remove("fa-eye");
      toggle.classList.add("fa-eye-slash");
    }
  });
});

function getUsers() {
  return JSON.parse(localStorage.getItem("skillspringUsers")) || [];
}

function saveUsers(users) {
  localStorage.setItem("skillspringUsers", JSON.stringify(users));
}

function setCurrentUser(user) {
  localStorage.setItem("skillspringCurrentUser", JSON.stringify(user));
}

// Register User
function registerUser(name, email, password) {
  const users = getUsers();

  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    showToast("User already exists", "error");
    return false;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    bio: "",
    avatar: "",
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);

  showToast("Account created successfully. Please sign in.", "success");
  return true;
}

// Sign-in Form Listener
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signinEmail").value.trim();
  const password = document.getElementById("signinPassword").value.trim();

  loginUser(email, password);
});

// Login User
function loginUser(email, password) {
  const users = getUsers();

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    showToast("Invalid credentials", "error");
    return;
  }

  setCurrentUser(user);

  showToast("Login successful", "success");

  // Wait 1.2s for user to see toast before redirect
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1200);
}

// Switch to SIGN IN Tab
function switchToSignIn() {
  tabs.forEach(tab => tab.classList.remove("active"));
  document.querySelector('[data-tab="signin"]').classList.add("active");
  signupForm.classList.remove("active-form");
  signinForm.classList.add("active-form");
}

// Signup Form Listener
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    showToast("Please fill all fields", "warning");
    return;
  }

  const success = registerUser(name, email, password);

  if (success) {
    switchToSignIn();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".auth-container");
  if (container) container.classList.remove("fade-out");

  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      e.preventDefault();
      container.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
});