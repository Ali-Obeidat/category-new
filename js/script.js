const openHtmlModalButtons = document.querySelector(".Html");
const closeHtmlModalButtons = document.querySelector("#close-html");

openHtmlModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_html");
  openModal(modal);
});

closeHtmlModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_html");
  closeModal(modal);
});

function openModal(modal) {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
//////////////////////////////////////////////////////////////////////
const openJsModalButtons = document.querySelector(".css");
const closeJsModalButtons = document.querySelector("#close-css");

openJsModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_css");
  openModal(modal);
});

closeJsModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_css");
  closeModal(modal);
});

function openModal(modal) {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
///////////////////////////////////////////////////////////////
const openCssModalButtons = document.querySelector(".js");
const closeCssModalButtons = document.querySelector("#close-js");

openCssModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_js");
  openModal(modal);
});

closeCssModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_js");
  closeModal(modal);
});

function openModal(modal) {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
