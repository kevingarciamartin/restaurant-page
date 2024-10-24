import image1 from "../img/food-1.jpg";
import image2 from "../img/food-2-small.jpg";
import image3 from "../img/interior-1-small.jpg";
import Button from "./Button";
import initPageSwitch from "../helpers/initPageSwitch";
import Reservation from "../pages/reservation";

const pageContent = document.querySelector("#content");

export default function NorthernAtmosphere() {
  const section = document.createElement("section");
  const sectionHeader = document.createElement("div");
  const sectionTitle = document.createElement("p");
  const sectionSubtitle = document.createElement("p");
  const sectionContentContainer = document.createElement("div");
  const sectionContentContainerRight = document.createElement("div");
  const sectionContent = document.createElement("div");
  const sectionContentText = document.createElement("p");
  const sectionContentButton = Button("Reserve a table");
  const sectionImage1 = document.createElement("img");
  const sectionImage2 = document.createElement("img");
  const sectionImage3 = document.createElement("img");

  section.id = "northern-atmosphere";
  sectionHeader.classList.add("northern-atmosphere-header");
  sectionTitle.classList.add("northern-atmosphere-title");
  sectionSubtitle.classList.add("northern-atmosphere-subtitle");
  sectionContentContainer.classList.add(
    "northern-atmosphere-content-container"
  );
  sectionContentContainerRight.classList.add(
    "northern-atmosphere-content-container-right"
  );
  sectionContent.classList.add("northern-atmosphere-content");
  sectionContentText.classList.add("northern-atmosphere-content-text");
  sectionImage1.classList.add("northern-atmosphere-image", "primary");
  sectionImage2.classList.add("northern-atmosphere-image");
  sectionImage3.classList.add("northern-atmosphere-image");

  sectionTitle.textContent = "Northern atmosphere";
  sectionSubtitle.textContent =
    "The restaurant's kitchen and interior embody the coziness and warmth of Norwegian flavor";
  sectionContentText.textContent =
    "Pleasant wooden finishes, natural fabrics and traditional decor elements will make you feel at home. We have created an atmosphere where every guest can relax, enjoy the taste and spend time in the company of close friends and family.";
  sectionImage1.src = image1;
  sectionImage2.src = image2;
  sectionImage3.src = image3;

  pageContent.appendChild(section);
  section.appendChild(sectionHeader);
  section.appendChild(sectionContentContainer);
  sectionHeader.appendChild(sectionTitle);
  sectionHeader.appendChild(sectionSubtitle);
  sectionContentContainer.appendChild(sectionImage1);
  sectionContentContainer.appendChild(sectionContentContainerRight);
  sectionContentContainerRight.appendChild(sectionContent);
  sectionContentContainerRight.appendChild(sectionImage2);
  sectionContentContainerRight.appendChild(sectionImage3);
  sectionContent.appendChild(sectionContentText);
  sectionContent.appendChild(sectionContentButton);

  sectionContentButton.addEventListener("click", () => {
    const reservationButton = document.querySelector("#nav-reservation");
    reservationButton.classList.add("active");
    initPageSwitch();
    Reservation();
  });
}
