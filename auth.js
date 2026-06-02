const tabs = document.querySelectorAll(".tab");

const signupForm =
document.getElementById("signupForm");

const signinForm =
document.getElementById("signinForm");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(btn =>
      btn.classList.remove("active")
    );

    tab.classList.add("active");

    if(tab.dataset.tab === "signup"){

      signupForm.classList.add("active-form");

      signinForm.classList.remove("active-form");

    } else {

      signinForm.classList.add("active-form");

      signupForm.classList.remove("active-form");

    }

  });

});


const toggles =
document.querySelectorAll(".toggle-password");

toggles.forEach(toggle => {

  toggle.addEventListener("click", () => {

    const input =
    toggle.previousElementSibling;

    if(input.type === "password"){

      input.type = "text";

      toggle.classList.remove(
        "fa-eye-slash"
      );

      toggle.classList.add(
        "fa-eye"
      );

    } else {

      input.type = "password";

      toggle.classList.remove(
        "fa-eye"
      );

      toggle.classList.add(
        "fa-eye-slash"
      );

    }

  });

});

function getUsers() {
  return JSON.parse(
    localStorage.getItem("skillspringUsers")
  ) || [];
}

function saveUsers(users) {
  localStorage.setItem(
    "skillspringUsers",
    JSON.stringify(users)
  );
}

function setCurrentUser(user) {
  localStorage.setItem(
    "skillspringCurrentUser",
    JSON.stringify(user)
  );
}


// Signup database


function registerUser(name, email, password) {
  const users = getUsers();

  // check if user already exists
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    alert("User already exists");
    return;
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

alert("Account created successfully. Please sign in.");
}

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email =
    document.getElementById("signinEmail").value.trim();

  const password =
    document.getElementById("signinPassword").value.trim();

  loginUser(email, password);
});



// Sign-in database


function loginUser(email, password) {
  const users = getUsers();

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Invalid credentials");
    return;
  }

  setCurrentUser(user);

  alert("Login successful");

  window.location.href = "home.html";
}

const createBtn = document.querySelector("#signupForm .cta-btn");

// // Get tabs + forms
// const tabs = document.querySelectorAll(".tab");
// const signupForm = document.getElementById("signupForm");
// const signinForm = document.getElementById("signinForm");

// switch to SIGN IN
function switchToSignIn() {
  // remove active states
  tabs.forEach(tab => tab.classList.remove("active"));

  // activate SIGN IN tab
  document.querySelector('[data-tab="signin"]').classList.add("active");

  // switch forms
  signupForm.classList.remove("active-form");
  signinForm.classList.add("active-form");
}


signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name =
    document.getElementById("signupName").value.trim();

  const email =
    document.getElementById("signupEmail").value.trim();

  const password =
    document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  registerUser(name, email, password);

  switchToSignIn();
});