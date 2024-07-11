document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engeller

    const email = document.getElementById("email").value;
    const responseMessage = document.getElementById("response-message");

    if (validateEmail(email)) {
      responseMessage.textContent = "Thank you for subscribing!";
      responseMessage.style.color = "#4CAF50";
      // Burada e-posta adresini sunucuya göndermek için AJAX isteği yapabilirsiniz
    } else {
      responseMessage.textContent = "Please enter a valid email address.";
      responseMessage.style.color = "#e53671";
    }
  });

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

const hoverLogo = document.getElementById("hover-logo");
const originalLogo = document.getElementById("original-logo");
const logoClick = document.getElementById("nav-logoo");

originalLogo.addEventListener("mouseover", () => {
  hoverLogo.style.top = "auto";
  hoverLogo.style.position = "relative";
  originalLogo.style.position = "absolute";
  originalLogo.style.top = "-100%";
});
hoverLogo.addEventListener("mouseout", () => {
  hoverLogo.style.top = "-100%";
  hoverLogo.style.position = "absolute";
  originalLogo.style.position = "relative";
  originalLogo.style.top = "auto";
});


let isOriginalVisible = true;

logoClick.addEventListener('click', () => {
  if (isOriginalVisible) {
    hoverLogo.style.top = "auto";
    hoverLogo.style.position = "relative";
    originalLogo.style.position = "absolute";
    originalLogo.style.top = "-100%";
  } else {
    hoverLogo.style.top = "-100%";
    hoverLogo.style.position = "absolute";
    originalLogo.style.position = "relative";
    originalLogo.style.top = "auto";
  }
  isOriginalVisible = !isOriginalVisible;
});
