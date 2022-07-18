const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const navend = document.querySelector(".nav-end");

navToggle.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
    navToggle.innerHTML = `<i class="fa fa-bars"></i>`;
  } else {
    links.classList.add("show-links");
    navToggle.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
  }
  if (navend.classList.contains("show-links")) {
    navend.classList.remove("show-links");
  } else {
    navend.classList.add("show-links");
  }
});
