const privacy = document.querySelector(".linkPrivacy");
const classeNascosta = document.querySelector(".classeNascosta");
const boxHeight = document.querySelector(".background");

function showHidePrivacy() {
  if (classeNascosta.classList.contains("hidden")) {
    classeNascosta.classList.remove("hidden");
    boxHeight.style.height = "700px";
  } else {
    classeNascosta.classList.add("hidden");
    boxHeight.style.height = "600px";
  }
}

privacy.addEventListener("click", showHidePrivacy);
