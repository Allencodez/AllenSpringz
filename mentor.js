
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});





// FULL DATA
const mentors = [
  {
    id: 1,
    name: "Grey Lucas",
    role: "Senior Frontend Developer",
    category: "Web Development",
    image: "./assets/image/img-1.jpg",
    rating: 4.8,
    description: "Guiding learners through modern frontend development track.",
    skills: "React | Tailwind CSS | JavaScript",
    experience: 7,
    students: 120
  },
  {
    id: 2,
    name: "Kim Chase",
    role: "Junior Frontend Developer",
    category: "Web Development",
    image: "./assets/image/img-3.jpg",
    rating: 4.2,
    description: "Helping beginners master modern frontend development.",
    skills: "HTML | CSS | JavaScript",
    experience: 4,
    students: 200
  },
  {
    id: 3,
    name: "Samantha Jones",
    role: "Senior Product Designer",
    category: "Product Design",
    image: "./assets/image/img-4.jpg",
    rating: 4.8,
    description: "I help aspiring designers learn product design fundamentals, build portfolios and improve design thinking.",
    skills: "UI / UX | Figma | Design Systems",
    experience: 10,
    students: 210
  },
  {
    id: 4,
    name: "John Carter",
    role: "Junior Product Designer",
    category: "Product Design",
    image: "./assets/image/img-2.jpg",
    rating: 4.2,
    description: "Helping beginners master the essence of design.",
    skills: "Figma | Prototyping | Wireframing",
    experience: 3,
    students: 140
  }
];

// DOM GRIDS
const webGrid = document.getElementById("webGrid");
const designGrid = document.getElementById("designGrid");
const count = document.getElementById("count");
const webSection = document.querySelectorAll(".mentor-category")[0];
const designSection = document.querySelectorAll(".mentor-category")[1];

let filteredMentors = [...mentors];

// CARD RENDER FUNCTION (SAFE)
function createCard(m) {
  const card = document.createElement("div");
  card.className = "mentor-card";

  card.innerHTML = `
    <div class="mentor-top">

      <div class="mentor-left">

        <img src="${m.image}" class="mentor-image" />

        <div class="mentor-details">
          <div class="mentor-name-tag">${m.name}</div>
          <h3>${m.role}</h3>
        </div>

      </div>

      <div class="rating-badge">
        <img src="./assets/icon/Vector.svg" />
        <span>${m.rating}</span>
      </div>

    </div>

    <p class="mentor-description">${m.description}</p>

    <div class="mentor-skills">${m.skills}</div>

    <div class="mentor-exp">${m.experience} years experience</div>

    <div class="mentor-students">☐ ${m.students} students</div>

    <div class="mentor-buttons">

      <button class="outline-btn" data-id="${m.id}">
        View Profile
      </button>

      <button class="gradient-btn">Book Session</button>

    </div>
  `;

  return card;
}

// RENDER BY CATEGORY (FIXES MOBILE STRUCTURE ISSUE)

function render() {

  console.log("RENDER FIRED");

  webGrid.innerHTML = "";
  designGrid.innerHTML = "";

  let total = 0;

  // reset counters every render (IMPORTANT FIX)
  let webCount = 0;
  let designCount = 0;

  filteredMentors.forEach(m => {

    const card = createCard(m);

    if (m.category === "Web Development") {
      webGrid.appendChild(card);
      webCount++;
    }

    if (m.category === "Product Design") {
      designGrid.appendChild(card);
      designCount++;
    }

    total++;
  });

  count.textContent = total;

  // ✅ SHOW BOTH SECTIONS BY DEFAULT (FIX FOR EMPTY FIRST LOAD BUG)
  webSection.style.display = "block";
  designSection.style.display = "block";

  // ONLY HIDE IF SEARCH IS ACTIVE AND CATEGORY HAS NO RESULTS
  const searchValue = document.querySelector(".search-box input").value
    .toLowerCase()
    .trim();

  if (searchValue !== "") {
    webSection.style.display = webCount > 0 ? "block" : "none";
    designSection.style.display = designCount > 0 ? "block" : "none";
  }

  // rebind buttons
  document.querySelectorAll(".outline-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      window.location.href = `mentor-profile.html?id=${id}`;
    });
  });

  
}

               // SEARCH FUNCTIONALITY

               
               const searchLoading = document.getElementById("searchLoading");

               const searchInput = document.querySelector(".search-box input");


               
// searchInput.addEventListener("input", (e) => {
//   const value = e.target.value;

//   // if input is empty → reset everything immediately
//   if (value.trim() === "") {
//     filteredMentors = [...mentors];
//     render();
//     return;
//   }

//   // otherwise use Discover-style loading flow
//   startSearch(value);
// });


function handleSearchTrigger() {
  const value = searchInput.value.trim();

  if (value === "") {
    filteredMentors = [...mentors];
    render();
    return;
  }

  startSearch(value);
}


        //  SEARCH BUTTON FUNCTIONALITY

       const searchBtn = document.querySelector(".search-btn");



// searchBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   startSearch(searchInput.value);
// });

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleSearchTrigger();
});




// searchInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     startSearch(searchInput.value);
//   }
// });


searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearchTrigger();
  }
});



searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() === "") {
    filteredMentors = [...mentors];
    render();
  }
});













function startSearch(value) {
  searchLoading.classList.remove("hidden");

  setTimeout(() => {
    runSearch(value);
    searchLoading.classList.add("hidden");
  }, 500);
}



function runSearch(value) {
  const searchValue = value.toLowerCase().trim();

  filteredMentors = mentors.filter(m => {
    return (
      m.name.toLowerCase().includes(searchValue) ||
      m.role.toLowerCase().includes(searchValue) ||
      m.skills.toLowerCase().includes(searchValue)
    );
  });

  render();
}


render();