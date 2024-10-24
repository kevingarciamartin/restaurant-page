import image1 from "../img/food-4.jpg";
import image2 from "../img/food-3-small.jpg";
import Button from "../components/Button";
import initPageSwitch from "../helpers/initPageSwitch";
import Reservation from "../pages/reservation";

const pageContent = document.querySelector("#content");

export default function Menu() {
  document.title = "Menu - Fjordsmaken";

  const menu = document.createElement("section");
  const menuImage1 = document.createElement("img");
  const menuImage2 = document.createElement("img");
  const menuContentContainer = document.createElement("div");
  const menuTitle = document.createElement("h2");
  const menuText1 = document.createElement("p");
  const menuText2 = document.createElement("p");
  const menuPricingList = document.createElement("ul");
  const menuPricingItem1 = document.createElement("li");
  const menuPricingItem2 = document.createElement("li");
  const menuPricingItem3 = document.createElement("li");
  const menuPricingItem4 = document.createElement("li");
  const menuButton = Button("Reserve a table");

  menu.id = "menu";
  menuImage1.src = image1;
  menuImage2.src = image2;
  menuContentContainer.classList.add("menu-content-container");
  menuTitle.classList.add("menu-title", "page-title");
  menuText1.classList.add("menu-text");
  menuText2.classList.add("menu-text");
  menuPricingList.classList.add("menu-pricing-container");

  menuTitle.textContent = "A taste of Fjordsmaken";
  menuText1.textContent =
    "At Fjordsmaken, we use Norwegian cooking techniques to make contemporary food with carefully selected seasonal ingredients and Norwegian flavors.";
  menuText2.textContent =
    "Our menus can, of course, be vegan and adapted to allergies. Notify us before your visit, and we will arrange that for you. Our menu follows the seasons and is constantly transforming.";
  menuPricingItem1.textContent = "Set menu NOK 2.600";
  menuPricingItem2.textContent = "Wine pairing NOK 1.800";
  menuPricingItem3.textContent = "Juice pairing NOK 1.000";
  menuPricingItem4.textContent = "Mixed pairing NOK 1.400";

  pageContent.appendChild(menu);
  menu.appendChild(menuImage1);
  menu.appendChild(menuImage2);
  menu.appendChild(menuContentContainer);
  menuContentContainer.appendChild(menuTitle);
  menuContentContainer.appendChild(menuText1);
  menuContentContainer.appendChild(menuText2);
  menuContentContainer.appendChild(menuPricingList);
  menuContentContainer.appendChild(menuButton);
  menuPricingList.appendChild(menuPricingItem1);
  menuPricingList.appendChild(menuPricingItem2);
  menuPricingList.appendChild(menuPricingItem3);
  menuPricingList.appendChild(menuPricingItem4);

  menuButton.addEventListener("click", () => {
    const reservationButton = document.querySelector("#nav-reservation");
    reservationButton.classList.add("active");
    initPageSwitch();
    Reservation();
  });
}
