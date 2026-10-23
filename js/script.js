var form = document.getElementById("contactForm");
var formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // page reload hone se roko

  var name = document.getElementById("contactName").value.trim();
  var email = document.getElementById("contactEmail").value.trim();
  var subject = document.getElementById("contactSubject").value.trim();
  var message = document.getElementById("contactMessage").value.trim();

  // agar koi bhi field khali hai
  if (name === "" || email === "" || subject === "" || message === "") {
    formStatus.textContent = "Please fill in all fields.";
    return;
  }

  formStatus.textContent = "Thank you, " + name + "! Your message has been sent.";
  form.reset(); // form saaf kar do
});