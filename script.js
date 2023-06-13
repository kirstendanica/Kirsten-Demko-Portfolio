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
      formData.append("no-cache", "1"); // Add the no-cache field
      const action = form.getAttribute("data-netlify") ? "/" : form.action;

      fetch(action, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Form submitted successfully
            alert("Form submitted successfully!");
            form.reset();
          } else {
            // Error submitting form
            alert("There was an error submitting the form. Please try again.");
          }
        })
        .catch((error) => {
          // Network error
          console.error("Error submitting form:", error);
          alert("There was a network error submitting the form. Please try again.");
        });
    });
  });
});