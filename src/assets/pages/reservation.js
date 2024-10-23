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

  button.addEventListener("click", (event) => {
    event.preventDefault();
  });
}
