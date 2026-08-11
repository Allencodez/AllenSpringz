protectPage(); // 👈 MUST BE FIRST LINE 

window.addEventListener("DOMContentLoaded", () => { 
  
  const currentUser = JSON.parse(
    localStorage.getItem("skillspringCurrentUser")
  );

 const welcomeMessage = document.getElementById("welcomeMessage"); 

if (currentUser && welcomeMessage) {
   welcomeMessage.textContent = `Welcome back, ${currentUser.name}!`;

  } 

 });





 // SEARCH FUNCTIONALITY // 

 const searchInput = document.querySelector(".search-box input");

 const searchBtn = document.querySelector(".search-btn");

 const courseCards = document.querySelectorAll(".course-card");

 const coursesCount = document.querySelector(".courses-count");






 // CATEGORY HEADERS

 const webHeader = document.querySelector(".category-header");

 const designHeader = document.querySelector(".category-header-2");

 const searchLoading = document.getElementById("searchLoading");






 // COURSE GRIDS

const webGrid = document.querySelectorAll(".courses-grid")[0];

const designGrid = document.querySelectorAll(".courses-grid")[1];





function runSearch() {


  const value = searchInput.value.toLowerCase().trim();

  const emptyState = document.getElementById("searchEmptyState");

  let foundMatch = false; // restore all cards if search box is empty 

  if (value === "") {

    courseCards.forEach(card => { card.style.display = "block"; });


    emptyState.style.display = "none"; return; }

    courseCards.forEach(card => { const text = card.innerText.toLowerCase();

   const match = text.includes(value); card.style.display = match ? "block" : "none";

   if (match) { foundMatch = true; } });

   emptyState.style.display = foundMatch ? "none" : "block"; }




   function startSearch() { searchLoading.classList.remove("hidden");

  setTimeout(() => { runSearch();

    searchLoading.classList.add("hidden"); }, 500); }




    // SEARCH BUTTON FUNCTIONALITY


    searchBtn.addEventListener("click", () => { startSearch(); });


    searchInput.addEventListener("keydown", (e) => { 
      
      if (e.key === "Enter") { 
        
        e.preventDefault();
        
        startSearch(); 
      
      } 
    });


      searchInput.addEventListener("input", () => { 
        
        if (searchInput.value.trim() === "") {

          courseCards.forEach(card => { 
            
            card.style.display = "block"; });

            document.getElementById( "searchEmptyState" ).style.display = "none"; 
          
          } 
        });





        const courseButtons = document.querySelectorAll(".course-btn");


        courseButtons.forEach(button => {
          
          button.addEventListener("click", () => {
            
          const courseId = button.dataset.id;

          localStorage.setItem("selectedCourse", courseId);
           
          window.location.href = `course-detail.html?id=${courseId}`;

          });
        });