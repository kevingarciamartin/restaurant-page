import image from "../img/hero.jpg";

const pageContent = document.querySelector("#content");

export default function Hero() {
  const hero = document.createElement("section");
  const heroTitle = document.createElement("p");
  const heroSubtitle = document.createElement("p");
  const heroImage = document.createElement("img");

  hero.id = "hero";
  heroTitle.classList.add("hero-title");
  heroSubtitle.classList.add("hero-subtitle");

  heroTitle.textContent =
    "Discover the flavors of Norway at our authentic Norwegian cuisine restaurant.";
  heroSubtitle.textContent =
    "Indulge in traditional dishes made ith the freshest locally sourced ingredients, expertly prepared to showcase he rich culinary heritage of Norway.";
  heroImage.src = image;

  pageContent.appendChild(hero);
  hero.appendChild(heroTitle);
  hero.appendChild(heroSubtitle);
  hero.appendChild(heroImage);
}
