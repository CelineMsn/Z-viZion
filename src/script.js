function alertMessage(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email-address").value;
  let contactMessage = document.querySelector("#contact-message").value;
  document.querySelector("#hero-contact").innerHTML = "";
  let message = document.querySelector("#contact-title");
  message.classList.add("margin");
  document.querySelector(
    "#contact-title"
  ).innerHTML = `Thanks, ${name}! 😃 I'll be in touch with you shortly`;
  sendMail(name, email, contactMessage);
}

document.querySelector("#send-mail").addEventListener("submit", alertMessage);

function sendMail(event) {
  mailTo;
}

