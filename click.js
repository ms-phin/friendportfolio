const humburger = document.querySelector("#burgermenu");
const humburgermenu = document.querySelector("#menu");
const mlinks = document.querySelectorAll("#mlink");

humburger.addEventListener("click", () => {
  humburgermenu.classList.toggle("hidden");
  humburger.classList.toggle("bg-white");
});

mlinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    humburger.classList.toggle("bg-white");
  });
});

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");
function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value} <br> message:${mess.value}`;
  console.log("Full Name:", fullName.value);
  console.log("Email:", email.value);
  console.log("Message:", mess.value);

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "negashdegelo7@gmail.com",
    Password: "582421B41293363C9CF8EB2676AAAEDD14F3",
    To: "negashdegelo7@gmail.com",
    From: email.value,
    Subject: mess.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      fullName.value = "";
      email.value = "";
      mess.value = "";
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
  return false;
});
