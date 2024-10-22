export default function Form(formTitle) {
  const form = document.createElement("form");
  const title = document.createElement("h2");

  form.classList.add("form");
  title.classList.add("form-title", "page-title");

  title.textContent = formTitle;

  form.appendChild(title);

  return form;
}
