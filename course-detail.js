
/* BACK BUTTON NAVIGATION */

// Mobile back button
const mobileBack = document.querySelector(".back-btn");

// Desktop back button
const desktopBack = document.querySelector(".desktop-topbar span");

// Target page (your mentor list page)
const backURL = "discover.html";

if (mobileBack) {
  mobileBack.style.cursor = "pointer";

  mobileBack.addEventListener("click", () => {
    window.location.href = backURL;
  });
}

if (desktopBack) {
  desktopBack.style.cursor = "pointer";

  desktopBack.addEventListener("click", () => {
    window.location.href = backURL;
  });
}



// const params = new URLSearchParams(window.location.search);
// const courseId = Number(params.get("id"));

// const course = courses.find(c => c.id === courseId);


// document.querySelector(".about-section h2").textContent = course.title;

// document.querySelector(".about-section p").textContent = course.description;

// document.querySelector(".video p").textContent = course.title;



// const moduleContainer = document.getElementById("modules");

// moduleContainer.innerHTML = ""; // safety reset

// for (let i = 1; i <= course.modules; i++) {
//   const div = document.createElement("div");
//   div.className = "course-card";
//   div.textContent = `Module ${i}`;
//   moduleContainer.appendChild(div);
// }




/*
----------------------------------------
GET COURSE ID FROM URL
----------------------------------------
Example:
course-detail.html?id=3
----------------------------------------
*/

const params =
  new URLSearchParams(window.location.search);

const courseId =
  Number(params.get("id"));



/*
----------------------------------------
FIND THE MATCHING COURSE
----------------------------------------
*/

const course =
  courses.find(item => item.id === courseId);

console.log(courseId);
console.log(course);

/*
----------------------------------------
SAFETY CHECK
----------------------------------------
*/

if (!course) {

  window.location.href =
    "discover.html";

}



/*
----------------------------------------
RENDER COURSE INFORMATION
----------------------------------------
*/

document.getElementById("video-title")
  .textContent = course.title;

document.getElementById("course-title")
  .textContent = course.title;

document.getElementById("course-description")
  .textContent = course.description;

// Dynamic course thumbnail

const videoCard = document.querySelector(".video");

videoCard.style.backgroundImage = `url('${course.videoImage}')`;
  

/*
----------------------------------------
RENDER MENTOR INFORMATION
----------------------------------------
*/

document.getElementById("mentor-name")
  .textContent = course.mentor;

document.getElementById("mentor-role")
  .textContent = course.role;

document.getElementById("mentor-rating")
  .textContent = course.rating;

document.getElementById("about-mentor")
  .textContent = course.aboutMentor;

document.getElementById("mentor-image")
  .src = course.mentorImage;



/*
----------------------------------------
RENDER MODULES
----------------------------------------
*/

const modulesContainer =
  document.getElementById("modules");

modulesContainer.innerHTML = "";

course.modules.forEach((module, index) => {

  const div =
    document.createElement("div");

  div.className = "course-card";

  div.textContent =
    `${index + 1}. ${module}`;

  modulesContainer.appendChild(div);

});


