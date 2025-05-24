//Scrolling Effect - Dim opacity to 0.2
document.addEventListener("DOMContentLoaded", () => {
  const mainbox = document.getElementById("main-box");
  const about = document.getElementById("about-box");

  window.addEventListener("scroll", () => {
    const mainboxHeight = mainbox.offsetHeight;
    const triggerPoint = mainbox.offsetTop + mainboxHeight / 2;

    if (window.scrollY >= triggerPoint) {
      mainbox.style.opacity = "0.2"; // fade but still visible
    } else {
      mainbox.style.opacity = "1";
    }
    if (window.scrollY >= triggerPoint) {
      about.style.opacity = "1"; // fade in
    } else {
      about.style.opacity = "0.2"; // fade back to dim
    }
  });
});
