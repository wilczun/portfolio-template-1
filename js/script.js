$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#dynamic').addClass('bg-change');
    $('#dynamic').addClass('nav-transition');
    $('#lineWhite1').addClass('burger-white')
    $('#lineWhite2').addClass('burger-white')
    $('#lineWhite3').addClass('burger-white')

  } else {
    $('#dynamic').removeClass('bg-change');
    $('#dynamic').addClass('nav-transition');
    $('#lineWhite1').removeClass('burger-white')
    $('#lineWhite2').removeClass('burger-white')
    $('#lineWhite3').removeClass('burger-white')
  }
});

const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger')
const links = document.querySelectorAll('a')

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle")
});
links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.toggle("nav-open")
    burger.classList.toggle("toggle")
  });
});

const images = document.querySelectorAll('.fade-in');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `fade-in-animation 2s forwards ease-out`;
    }
  })
})

images.forEach(image => {
  observer.observe(image)
})