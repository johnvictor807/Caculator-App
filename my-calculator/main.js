// This section is for the calculator app functionality
const allInputs = document.querySelectorAll(".btn");

allInputs.forEach((input) => {
  input.addEventListener("click", appendScreen);
});

document.querySelector("#delete").addEventListener("click", deleteValue);

document.querySelector("#clear").addEventListener("click", clearScreen);

document.querySelector("#equal").addEventListener("click", evalScreen);

function appendScreen() {
  document.querySelector("#screen").value += this.value;
}

function deleteValue() {
  let screenValue = document.querySelector("#screen");

  screenValue.value = screenValue.value.slice(0, -1);
}

function clearScreen() {
  document.querySelector("#screen").value = "";
}

function evalScreen() {
  document.querySelector("#screen").value = eval(
    document.querySelector("#screen").value
  );
}

// This is the js codes for the themes
document
  .querySelectorAll(".btnn")
  .forEach((button) =>
    button.addEventListener(
      "mouseenter",
      () => (button.style.cursor = "pointer")
    )
  );
