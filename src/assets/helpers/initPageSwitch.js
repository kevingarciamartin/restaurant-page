export default function initPageSwitch() {
  const pageContent = document.querySelector("#content");
  const activeButton = document.getElementsByClassName("nav-btn active");

  pageContent.textContent = "";
  activeButton[0].classList.remove("active");
}
