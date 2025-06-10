//Scrolling Effect - Dim opacity to 0.2
document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    document.getElementById("main-box"),
    document.getElementById("about-box"),
    document.getElementById("project-box"),
    document.getElementById("contact-box"),
  ];

  window.addEventListener("scroll", () => {
    const viewportMiddle = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (viewportMiddle >= sectionTop && viewportMiddle <= sectionBottom) {
        section.style.opacity = "1";
      } else {
        section.style.opacity = "0.2";
      }
    });
  });
});

//Carousel Scrolling Effect, Swipe(for mobile) and Infinited Loop

const track = document.getElementById("track");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const scrollStep = track.offsetWidth; // scroll a bit more than 1 item (/4)*1.2

leftArrow.addEventListener("click", () => {
  track.scrollBy({ left: -scrollStep, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  track.scrollBy({ left: scrollStep, behavior: "smooth" });
});

// Auto scroll with looping
setInterval(() => {
  if (track.scrollLeft + track.offsetWidth >= track.scrollWidth - 30) {
    // Reset to start when near the end
    track.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    track.scrollBy({ left: scrollStep, behavior: "smooth" });
  }
}, 6000);

// Swipe support (mobile)
let startX = 0;
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend", (e) => {
  const diff = startX - e.changedTouches[0].clientX;
  if (diff > 50) {
    track.scrollBy({ left: scrollStep, behavior: "smooth" });
  } else if (diff < -50) {
    track.scrollBy({ left: -scrollStep, behavior: "smooth" });
  }
});

//Javascript Validation for Form (Contact Section)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Basic empty check
  if (!name || !email || !subject || !message) {
    e.preventDefault(); // stop submit
    alert("Please fill in all fields.");
    return;
  }

  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    e.preventDefault(); // stop submit
    alert("Please enter a valid email address.");
    return;
  }
});
