import "./assets/styles/reset.css";
import "./assets/styles/styles.css";
import Index from "./assets/pages/indexContent";
import Menu from "./assets/pages/menu";
import Reservation from "./assets/pages/reservation";
import About from "./assets/pages/about";
import Contact from "./assets/pages/contact";

Index();

const handleClickEvent = (() => {
  const navButtons = document.querySelectorAll(".nav-btn");
  const pageContent = document.querySelector("#content");

  navButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const { target } = event;
      pageContent.textContent = "";
      if (target.id === "nav-home") {
        Index();
      } else if (target.id === "nav-menu") {
        Menu();
      } else if (target.id === "nav-reservation") {
        Reservation();
      } else if (target.id === "nav-about") {
        About();
      } else if (target.id === "nav-contact") {
        Contact();
      }
    });
  });
})();
