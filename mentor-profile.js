// protectPage(); // 👈 MUST BE FIRST LINE
// mentor profile


const mentors = [
  {
    id: 1,
    name: "Grey Lucas",
    role: "Senior Frontend Developer",
    image: "./assets/image/img-1.jpg",
    skills: "React | Tailwind CSS | JavaScript",
    description: "Helping beginners master frontend development, guiding learners through modern frontend development track.",
    experience: 7,
    students: 120,
    courses: [
      "Introduction to React",
      "Advanced JavaScript and Mastery",
      "Front-End Frameworks"
    ]
  },
  {
    id: 2,
    name: "Kim Chase",
    role: "Junior Frontend Developer",
    image: "./assets/image/img-3.jpg",
    skills: "HTML | CSS | JavaScript",
    description: "Helping beginners master modern frontend development.",
    experience: 4,
    students: 200,
    courses: [
      "HTML Basics",
      "CSS Fundamentals",
      "JavaScript Essentials"
    ]
  },
  {
    id: 3,
    name: "Samantha Jones",
    role: "Senior Product Designer",
    image: "./assets/image/img-4.jpg",
    skills: "UI / UX | Figma | Design Systems",
    description: "I help aspiring designers learn product design fundamentals, build portfolios and improve design thinking.",
    experience: 10,
    students: 210,
    courses: [
      "UI Design Fundamentals",
      "Figma Masterclass",
      "Design Systems"
    ]
  },
  {
    id: 4,
    name: "John Carter",
    role: "Junior Product Designer",
    image: "./assets/image/img-2.jpg",
    skills: "Figma | Prototyping | Wireframing",
    description: "Helping beginners master the essence of design.",
    experience: 3,
    students: 140,
    courses: [
      "Intro to Figma",
      "Wireframing Basics",
      "Prototyping Essentials"
    ]
  }
];

// GET ID FROM URL
const params = new URLSearchParams(window.location.search);
const mentorId = Number(params.get("id"));

const mentor = mentors.find(m => m.id === mentorId);

// SAFE RENDER
if (mentor) {

  // HERO SECTION
  document.querySelector(".mentor-image img").src = mentor.image;
  document.querySelector(".mentor-details h2").textContent = mentor.name;
  document.querySelector(".mentor-details h3").textContent = mentor.role;
  document.querySelector(".mentor-details p").textContent = mentor.skills;

  // ABOUT SECTION
  document.querySelector(".about-section p").textContent = mentor.description;

  // STATS (SAFE INLINE UPDATE)
  document.querySelector(".mentor-stats").innerHTML = `
    <span>${mentor.experience} years experience</span>
    <span>Has taught ${mentor.students} students</span>
  `;

  // COURSES (MATCH YOUR EXISTING HTML CARDS)
  const courseCards = document.querySelectorAll(".course-card");

  mentor.courses.forEach((course, i) => {
    if (courseCards[i]) {
      courseCards[i].textContent = course;
    }
  });

}

/* BACK BUTTON NAVIGATION */

// Mobile back button
const mobileBack = document.querySelector(".back-btn");

// Desktop back button
const desktopBack = document.querySelector(".desktop-topbar span");

// Target page (your mentor list page)
const backURL = "view-mentor.html";

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









// const viewMoreBtn = document.querySelector(".view-more");

// if (viewMoreBtn) {
//   viewMoreBtn.addEventListener("click", () => {

//     const id = mentor.id; // 👈 current mentor from URL logic

//     window.location.href =
//       `course-detail.html?id=${id}`;
//   });
// }

// const viewMoreBtn = document.querySelector(".view-more");

// if (viewMoreBtn) {
//   viewMoreBtn.addEventListener("click", () => {

//     const params = new URLSearchParams(window.location.search);
//     const mentorId = Number(params.get("id"));

//     const mentor = mentors.find(m => m.id === mentorId);

//     if (!mentor) return;

//     window.location.href =
//       `course-detail.html?id=${mentor.id}`;
//   });
// }


const viewMoreBtn = document.querySelector(".view-more");

if (viewMoreBtn) {
  viewMoreBtn.addEventListener("click", () => {

    // reuse the already parsed ID from top of file
    window.location.href =
      `course-detail.html?id=${mentorId}`;
  });
}