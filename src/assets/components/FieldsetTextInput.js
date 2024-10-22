import { capitalizeFirstLetter } from "../helpers/helper";

export default function FieldsetTextInput(inputID) {
  const title = capitalizeFirstLetter(inputID);

  const fieldset = document.createElement("fieldset");
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.textContent = title;
  label.setAttribute("for", inputID);
  input.id = inputID;

  fieldset.appendChild(label);
  fieldset.appendChild(input);

  return fieldset;
}
