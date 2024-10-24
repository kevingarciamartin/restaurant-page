import Form from "../components/Form";
import FieldsetTextInput from "../components/FieldsetTextInput";
import Button from "../components/Button";

const pageContent = document.querySelector("#content");

export default function Reservation() {
  document.title = "Reservation - Fjordsmaken";

  const form = Form("Reservation");
  const contentContainer = document.createElement("div");
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

  contentContainer.classList.add("form-content");
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
  errorMessageName.textContent = "Fill in this field";
  errorMessageEmail.textContent = "Fill in this field";
  errorMessageDate.textContent = "Fill in this field";
  errorMessageNoOfGuests.textContent = "Fill in this field";
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
  form.appendChild(contentContainer);
  contentContainer.appendChild(fieldsetName);
  contentContainer.appendChild(fieldsetEmail);
  contentContainer.appendChild(pickerContainer);
  contentContainer.appendChild(button);
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
    const nameError = document.querySelector(".error-name");
    const emailError = document.querySelector(".error-email");
    const dateError = document.querySelector(".error-date");
    const guestsError = document.querySelector(".error-guests");

    let emptyInputFields = 0;
    const inputFields = [
      { input: name, error: nameError },
      { input: email, error: emailError },
      { input: date, error: dateError },
      { input: guests, error: guestsError },
    ];

    document.querySelectorAll(".input-error-message").forEach((error) => {
      error.style.visibility = "hidden";
    });

    inputFields.forEach((inputField) => {
      if (inputField.input.value === "")
        emptyInputFields = displayErrorMessage(
          inputField.error,
          emptyInputFields
        );
    });

    if (emptyInputFields !== 0) return;

    if (!validateEmailPattern()) {
      emailError.textContent = "Use a correct email address";
      emailError.style.visibility = "visible";
    }

    if (!validateDate()) {
      dateError.textContent = "The chosen date is in the past";
      dateError.style.visibility = "visible";
    }

    if (!validateGuestsIsInteger(guests.value)) {
      guestsError.textContent = "Party size must be an integer";
      guestsError.style.visibility = "visible";
    }

    if (!validateGuestsIsInRange(guests.value)) {
      guestsError.textContent = "Party size must be between 1-6";
      guestsError.style.visibility = "visible";
    }

    confirmReservation(name, email, date, guests);
  });
}

function displayErrorMessage(error, emptyInputFields) {
  error.textContent = "Fill in this field";
  error.style.visibility = "visible";
  emptyInputFields++;

  return emptyInputFields;
}

function validateEmailPattern() {
  const regex = /[A-Za-z0-9._+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/;

  return regex.test(email.value);
}

function validateDate() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const chosenDate = date.value;
  const chosenYear = chosenDate.slice(0, 4);
  const chosenMonth = chosenDate.slice(5, 7);
  const chosenDay = chosenDate.slice(8, 10);

  if (chosenYear < currentYear) return false;
  if (chosenYear == currentYear && chosenMonth < currentMonth) return false;
  if (
    chosenYear == currentYear &&
    chosenMonth == currentMonth &&
    chosenDay < currentDay
  )
    return false;

  return true;
}

function validateGuestsIsInteger(guests) {
  guests = Number(guests);
  if (!Number.isInteger(guests)) return false;

  return true;
}

function validateGuestsIsInRange(guests) {
  guests = Number(guests);
  if (guests < 1 || guests > 6) return false;

  return true;
}

function confirmReservation(name, email, date, guests) {
  const formContent = document.querySelector(".form-content");

  formContent.innerHTML = `
      <p>Thank you for making a reservation at Fjordsmaken!</p>
      <ul>
        <li>
          <p>Name</p>
          <p>${name.value}</p>
        </li>
        <li>
          <p>Email</p>
          <p>${email.value}</p>
        </li>
        <li>
          <p>Date</p>
          <p>${date.value}</p>
        </li>
        <li>
          <p>Guests</p>
          <p>${guests.value}</p>
        </li>
      </ul>`;
}
