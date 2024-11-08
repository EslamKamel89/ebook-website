console.log("hello world");
function userScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 10) {
      navbar.style.backgroundColor = "#2b3041";
      navbar.style.opacity = 0.9;
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.opacity = 1;
    }
  });
}
document.addEventListener("DOMContentLoaded", userScroll);
