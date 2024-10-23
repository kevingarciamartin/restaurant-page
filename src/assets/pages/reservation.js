import Form from "../components/Form";
import FieldsetTextInput from "../components/FieldsetTextInput";
import Button from "../components/Button";

const pageContent = document.querySelector("#content");

export default function Reservation() {
  document.title = "Reservation - Fjordsmaken";

  const form = Form("Reservation");
  const fieldsetName = FieldsetTextInput("name");
  const fieldsetEmail = FieldsetTextInput("email");
  const pickerContainer = document.createElement("div");
  const fieldsetDate = document.createElement("fieldset");
  const fieldsetNoOfGuests = document.createElement("fieldset");
  const labelDate = document.createElement("label");
  const inputDate = document.createElement("input");
  const labelNoOfGuests = document.createElement("label");
  const inputNoOfGuests = document.createElement("input");
  const datalistNoOfGuests = document.createElement("datalist");
  const button = Button("Reserve a table");
  const errorMessageName = document.createElement("p");
  const errorMessageEmail = document.createElement("p");
  const errorMessageDate = document.createElement("p");
  const errorMessageNoOfGuests = document.createElement("p");

  pickerContainer.classList.add("picker-container");
  labelDate.textContent = "Date";
  labelDate.setAttribute("for", "date");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("id", "date");
  labelNoOfGuests.textContent = "Guests";
  labelNoOfGuests.setAttribute("for", "no-of-guests");
  inputNoOfGuests.setAttribute("list", "no-of-guests-list");
  inputNoOfGuests.setAttribute("type", "number");
  inputNoOfGuests.setAttribute("min", "1");
  inputNoOfGuests.setAttribute("max", "6");
  inputNoOfGuests.setAttribute = ("id", "no-of-guests");
  datalistNoOfGuests.id = "no-of-guests-list";
  errorMessageName.textContent = "Fill out this field";
  errorMessageEmail.textContent = "Fill out this field";
  errorMessageDate.textContent = "Fill out this field";
  errorMessageNoOfGuests.textContent = "Fill out this field";
  errorMessageName.classList.add("input-error-message", "error-name");
  errorMessageEmail.classList.add("input-error-message", "error-email");
  errorMessageDate.classList.add("input-error-message", "error-date");
  errorMessageNoOfGuests.classList.add("input-error-message", "error-guests");

  for (let i = 0; i < 6; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    datalistNoOfGuests.appendChild(option);
  }

  pageContent.appendChild(form);
  form.appendChild(fieldsetName);
  form.appendChild(fieldsetEmail);
  form.appendChild(pickerContainer);
  form.appendChild(button);
  pickerContainer.appendChild(fieldsetDate);
  pickerContainer.appendChild(fieldsetNoOfGuests);
  fieldsetDate.appendChild(labelDate);
  fieldsetDate.appendChild(inputDate);
  fieldsetNoOfGuests.appendChild(labelNoOfGuests);
  fieldsetNoOfGuests.appendChild(inputNoOfGuests);
  fieldsetNoOfGuests.appendChild(datalistNoOfGuests);
  fieldsetName.appendChild(errorMessageName);
  fieldsetEmail.appendChild(errorMessageEmail);
  fieldsetDate.appendChild(errorMessageDate);
  fieldsetNoOfGuests.appendChild(errorMessageNoOfGuests);

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const date = document.querySelector("#date");
    const guests = document.querySelector("input[list=no-of-guests-list]");

    document.querySelectorAll(".input-error-message").forEach((error) => {
      error.style.visibility = "hidden";
    });

    if (name.value === "")
      document.querySelector(".error-name").style.visibility = "visible";
    if (email.value === "")
      document.querySelector(".error-email").style.visibility = "visible";
    if (date.value === "")
      document.querySelector(".error-date").style.visibility = "visible";
    if (guests.value === "")
      document.querySelector(".error-guests").style.visibility = "visible";
  });
}
