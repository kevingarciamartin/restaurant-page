import "./assets/styles/reset.css";
import "./assets/styles/styles.css";
import Index from "./assets/pages/indexContent";
import Menu from "./assets/pages/menu";
import Reservation from "./assets/pages/reservation";
import initPageSwitch from "./assets/helpers/initPageSwitch";

Index();

const handleClickEvent = (() => {
  const navButtons = document.querySelectorAll(".nav-btn");

  navButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const { target } = event;

      initPageSwitch();
      target.classList.add("active");
      if (target.id === "nav-home") Index();
      else if (target.id === "nav-menu") Menu();
      else if (target.id === "nav-reservation") Reservation();
    });
  });
})();
