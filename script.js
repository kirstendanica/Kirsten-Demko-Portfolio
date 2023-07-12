// Menu
document.addEventListener("DOMContentLoaded", function () {
  // Menu toggler
  document.querySelector(".toggler").addEventListener("click", function () {
    const menu = document.querySelector(".navigation");
    menu.classList.toggle("show-menu");
  });
});

// Projects
const imageWraps = document.querySelectorAll('.image-wrap');
const scrollAmount = 100;

imageWraps.forEach((imageWrap) => {
  const scrollCont = imageWrap.querySelector('.scroll-cont');
  const arrowUp = imageWrap.querySelector('.arrow-up');
  const arrowDown = imageWrap.querySelector('.arrow-down');
  const linkWrap = imageWrap.querySelector('.link-wrap');
  const link = linkWrap.querySelector('a');
  const centerClickAreaSize = 50;

  scrollCont.addEventListener('click', (event) => {
    const { offsetX, offsetY } = event;
    const rect = scrollCont.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = Math.abs(centerX - offsetX);
    const deltaY = Math.abs(centerY - offsetY);

    if (
      deltaX <= (rect.width * centerClickAreaSize) / 100 / 2 &&
      deltaY <= (rect.height * centerClickAreaSize) / 100 / 2
    ) {
      link.click();
    }
  });

  arrowUp.addEventListener('click', () => {
    scrollCont.scrollTop -= scrollAmount;
  });

  arrowDown.addEventListener('click', () => {
    scrollCont.scrollTop += scrollAmount;
  });
});


// Grab year for copyright
window.onload = function () {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
};