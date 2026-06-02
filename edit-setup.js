// protectPage(); // 👈 MUST BE FIRST LINE


const user = getCurrentUser();

const uploadBox =
document.querySelector(".upload-box");

const imageInput =
document.getElementById("imageInput");

const uploadText =
document.querySelector(".upload-box span");

uploadBox.addEventListener("click", () => {

  imageInput.click();

});



imageInput.addEventListener("change", () => {

  const file = imageInput.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {

    const base64Image = e.target.result;

    uploadText.textContent = file.name;

    window.tempAvatar = base64Image;
  };

  reader.readAsDataURL(file);
});




const genderBoxes = document.querySelectorAll(".gender-box");

genderBoxes.forEach(box => {
  box.addEventListener("change", () => {
    if (box.checked) {
      genderBoxes.forEach(otherBox => {
        if (otherBox !== box) {
          otherBox.checked = false;
        }
      });
    }
  });
});




function updateProfile(name, bio, avatar, gender) {
  let users = getUsers();
  let currentUser = getCurrentUser();

  const updatedUsers = users.map(user => {
    if (user.id === currentUser.id) {
      return {
        ...user,
        name,
        bio,
        avatar,
        gender
      };
    }
    return user;
  });

  saveUsers(updatedUsers);

  // update session too
  const updatedCurrentUser = updatedUsers.find(
    u => u.id === currentUser.id
  );

  setCurrentUser(updatedCurrentUser);

  alert("Profile updated successfully");
}



const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    logout();
    window.location.href = "auth.html";
  });
}




window.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const bio = document.querySelector("textarea").value;

    const gender =
      [...document.querySelectorAll(".gender-box")]
        .find(b => b.checked)?.value || "";

    const avatar =
      window.tempAvatar || getCurrentUser().avatar || "";

    const user = getCurrentUser();

    updateProfile(user.name, bio, avatar, gender);

    window.location.href = "profile.html";
  });

  console.log("JS loaded");

  console.log("Submit clicked");

});