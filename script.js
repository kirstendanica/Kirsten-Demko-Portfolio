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