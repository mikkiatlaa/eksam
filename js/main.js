const sidebar = document.getElementById("sidebar");

function openSidebar() {
  sidebar.classList.add("show");
  sidebar.classList.remove("hide");
  sidebar.setAttribute("aria-expanded", true);
  // create overlay
  let overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";
  document.body.appendChild(overlay);
  // clicking overlay closes sidebar
  overlay.addEventListener("click", () => {
    closeSidebar();
  });
}

function closeSidebar() {
  sidebar.classList.remove("show");
  sidebar.classList.add("hide");
  sidebar.setAttribute("aria-expanded", false);
  // remove overlay if present
  const existing = document.querySelector(".sidebar-overlay");
  if (existing) existing.remove();
}

const buttons = document.querySelectorAll("#btn-tema-02, #btn-tema-03, #btn-tema-04, #btn-tema-05");
const sections = document.querySelectorAll("#tema-02, #tema-03, #tema-04, #tema-05");

function showSection(sectionId) {
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "block";
    } else {
      section.style.display = "none"; // hide the others
    }
  });
}

// Add click event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // The button id is in format "btn-tema-XX", we convert to "tema-XX"
    const sectionId = button.id.replace("btn-", "");
    showSection(sectionId);
  });
});

// Optional: hide all sections initially except the first one
showSection("tema-02");

// Header fade on scroll + nav stroke toggle
const header = document.querySelector(".menu");
const navList = document.querySelector("nav ul");

function onScroll() {
  const threshold = 50; // px scrolled before fade/stroke
  if (window.scrollY > threshold) {
    header.classList.add("header-scrolled");
    if (navList) navList.classList.add("stroke");
  } else {
    header.classList.remove("header-scrolled");
    if (navList) navList.classList.remove("stroke");
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
