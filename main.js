/* Gece Modu Switch'i*/
const darkModeToggle = document.querySelector('#darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark');
});

/* Yukarı Kaydırma Butonu */
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top-button").style.display = "block";
  } else {
    document.getElementById("back-to-top-button").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const navToggle = document.getElementById("nav-toggle");

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navToggle.checked) {
      navToggle.checked = false; // Uncheck eder
    }
  });

  