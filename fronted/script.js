/* 
========================================
NAVBAR SCROLLER
========================================
*/

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
});

/* 
========================================
SIDEBAR
========================================
*/
const sidebar = document.querySelector(".sidebar");

function showSidebar() {
  sidebar.classList.add("active");
}
function hideSidebar() {
  sidebar.classList.remove("active");
}
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !e.target.closest(".menu-bar")) {
    hideSidebar();
  }
});
document.querySelectorAll(".sidebar-content a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
    hideSidebar();
  });
});

/* 
========================================
REVIEW SLIDER
========================================
*/

const track = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");

track.style.width = `${slides.length * 100}%`;

slides.forEach((slide) => {
  slide.style.flex = `0 0 ${100 / slides.length}%`;
});

let index = 0;

function moveSlide() {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
}

setInterval(moveSlide, 3000);
/* 
========================================
CONTACT US API CONNECTION
========================================
*/
document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    alert("Message sent successfully!");
  });
