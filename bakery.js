document.addEventListener("DOMContentLoaded", () => {

  feather.replace();

  const navbar = document.querySelector(".navbar");
  const navbarNav = document.querySelector(".navbar-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const menuItems = document.querySelectorAll(".menu-item");
  const cookieImg = document.querySelector(".cookie-img");
  const timelineItems = document.querySelectorAll(".timeline-item");
  const aboutSection = document.querySelector(".about-section");

  // NAVBAR SCROLL
  window.addEventListener("scroll", () => {
    navbar.style.background =
      window.scrollY > 50
        ? "rgba(47,36,34,0.85)"
        : "rgba(47,36,34,0.6)";
  });

  // HAMBURGER
  navToggle.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
  });

  // MENU CARD ANIMATION
  function animateMenuCards() {
    menuItems.forEach((card, i) => {
      if (card.getBoundingClientRect().top < window.innerHeight - 100) {
        setTimeout(() => card.classList.add("show"), i * 150);
      }
    });
  }

  // ABOUT
  function animateAbout() {
    if (aboutSection.getBoundingClientRect().top < window.innerHeight - 150) {
      aboutSection.classList.add("show");
    }
  }

  // TIMELINE (OUR STORY FIX)
  function animateTimeline() {
    timelineItems.forEach(item => {
      if (item.getBoundingClientRect().top < window.innerHeight - 100) {
        item.classList.add("show");
      }
    });
  }

  // COOKIE PARALLAX (FIXED)
  window.addEventListener("scroll", () => {
    if (cookieImg) {
      cookieImg.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    }
    animateMenuCards();
    animateAbout();
    animateTimeline();
  });

  animateMenuCards();
  animateAbout();
  animateTimeline();
});
