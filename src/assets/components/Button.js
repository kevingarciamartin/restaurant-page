export default function Button(buttonText) {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = buttonText;

  return button;
}
