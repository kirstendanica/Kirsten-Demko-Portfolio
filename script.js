// Menu
document.addEventListener("DOMContentLoaded", function () {
  // Menu toggler
  document.querySelector(".toggler").addEventListener("click", function () {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("show-menu");
  });
});

// Contact form
document.addEventListener("DOMContentLoaded", function () {
  const ajaxForms = document.querySelectorAll("form[data-ajax]");

  function showAlert(message, timeout = 3000) {
    const alertElement = document.getElementById("alert-message");
    const submitButton = document.querySelector("button[type='submit']");
    alertElement.textContent = message;
    alertElement.classList.add("visible");
    submitButton.style.display = "none";

    setTimeout(() => {
      alertElement.classList.remove("visible");
      submitButton.style.display = "inline";
    }, timeout);
  }

  ajaxForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      formData.append("no-cache", "1"); // Add the no-cache field
      const action = form.getAttribute("data-netlify") ? "/submit" : form.action;

      fetch(action, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Form submitted successfully
            showAlert("Form submitted successfully!");
            form.reset();
          } else {
            // Error submitting form
            showAlert("There was an error submitting the form. Please try again.");
          }
        })
        .catch((error) => {
          // Network error
          console.error("Error submitting form:", error);
          showAlert("There was a network error submitting the form. Please try again.");
        });
    });
  });
});

/* -- Projects -- */
const imageWraps = document.querySelectorAll('.image-wrap');

const scrollAmount = 100; // Amount to scroll in pixels

imageWraps.forEach((imageWrap) => {
  const scrollCont = imageWrap.querySelector('.scroll-cont');
  const arrowUp = imageWrap.querySelector('.arrow-up');
  const arrowDown = imageWrap.querySelector('.arrow-down');
  const linkWrap = imageWrap.querySelector('.link-wrap');
  const link = linkWrap.querySelector('a');

  const centerClickAreaSize = 50; // Size in percentage, adjust as needed

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

// Copyright year grabber
window.onload = function () {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
};