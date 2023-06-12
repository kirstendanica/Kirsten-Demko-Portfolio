const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(toggleId),
    nav = document.querySelector(navId)

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
          toggle.classList.toggle("show");
        })
      }
    };
    
    showMenu('.toggler', '.toggler-open');


/* -- Contact form -- */
document.addEventListener("DOMContentLoaded", function () {
  const ajaxForms = document.querySelectorAll("form[data-ajax]");

  ajaxForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const action = form.getAttribute("data-netlify") ? "/?no-cache=1" : form.action;

      fetch(action, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Form submitted successfully
            alert("Thank you! : )");
            form.reset();
          } else {
            // Error submitting form
            alert("Hmm, looks like there was a mistake... Please try again!");
          }
        })
        .catch((error) => {
          // Network error
          console.error("Error submitting your information", error);
          alert("There was a network error submittin your information. Please try again!");
        });
    });
  });
});