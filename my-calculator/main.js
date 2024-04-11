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
  let output = document.querySelector("#screen");
  const outputValue = eval(output.value);
  output.value = Number(outputValue).toLocaleString();
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

const themeOne = document.querySelector(".first");
themeOne.addEventListener("click", setThemeOne);

const themeTwo = document.querySelector(".second");
themeTwo.addEventListener("click", setThemeTwo);

const themeThree = document.querySelector(".third");
themeThree.addEventListener("click", setThemeThree);

function setThemeOne() {
  document.querySelector("body").style.cssText = "";
  document.querySelector(".top-section").style.cssText = "";
  document.querySelector(".radio").style.cssText = "";
  document.querySelector(".keypad").style.cssText = "";
  document.querySelector("#screen").style.cssText = "";
  document.querySelector("#clear").style.cssText = "";
  document.querySelector("#delete").style.cssText = "";
  document.querySelector("#equal").style.cssText = "";
  document.querySelectorAll(".btn").forEach((e) => (e.style.cssText = ""));
}

function setThemeTwo() {
  document.querySelector("body").style.background = "hsl(0, 0%, 90%)";
  document.querySelector(".top-section").style.color = "hsl(60, 10%, 19%)";
  document.querySelector(".radio").style.background = "hsl(0, 5%, 81%)";
  document.querySelector(".keypad").style.background = "hsl(0, 5%, 81%)";
  document.querySelector("#screen").style.cssText =
    "background: hsl(0, 0%, 93%); color: hsl(60, 10%, 19%)";
  document.querySelector("#clear").style.cssText =
    "background: hsl(185, 42%, 37%); box-shadow: 0 4px 0px 0 hsl(185, 58%, 25%)";
  document.querySelector("#delete").style.cssText =
    "background: hsl(185, 42%, 37%); box-shadow: 0 4px 0px 0 hsl(185, 58%, 25%)";
  document.querySelector("#equal").style.cssText =
    "background: hsl(25, 98%, 40%); box-shadow: 0 4px 0px 0 hsl(25, 99%, 27%)";
  document
    .querySelectorAll(".btn")
    .forEach(
      (e) =>
        (e.style.cssText =
          "background: hsl(45, 7%, 89%); box-shadow: 0 4px 0px 0 hsl(35, 11%, 61%); color: hsl(60, 10%, 19%)")
    );
}

function setThemeThree() {
  document.querySelector("body").style.background = "hsl(268, 75%, 9%)";
  document.querySelector(".top-section").style.color = "hsl(52, 100%, 62%)";
  document.querySelector(".radio").style.background = "hsl(268, 71%, 12%)";
  document.querySelector(".keypad").style.background = "hsl(268, 71%, 12%)";
  document.querySelector("#screen").style.cssText =
    "background: hsl(268, 71%, 12%); color: hsl(52, 100%, 62%)";
  document.querySelector("#clear").style.cssText =
    "background: hsl(281, 89%, 26%); box-shadow: 0 4px 0px 0 hsl(285, 91%, 52%)";
  document.querySelector("#delete").style.cssText =
    "background: hsl(281, 89%, 26%); box-shadow: 0 4px 0px 0 hsl(285, 91%, 52%)";
  document.querySelector("#equal").style.cssText =
    "background: hsl(176, 100%, 44%); color: hsl(198, 20%, 13%); box-shadow: 0 4px 0px 0 hsl(177, 92%, 70%)";
  document
    .querySelectorAll(".btn")
    .forEach(
      (e) =>
        (e.style.cssText =
          "background: hsl(268, 47%, 21%); box-shadow: 0 4px 0px 0 hsl(290, 70%, 36%); color: hsl(52, 100%, 62%)")
    );
}
