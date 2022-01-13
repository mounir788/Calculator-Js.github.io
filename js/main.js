let display = document.querySelector(".display"),
  equal = document.getElementById("equal"),
  ac = document.getElementById("ac"),
  dele = document.getElementById("delete"),
  buttons = document.querySelectorAll(".button"),
  switchBtn = document.querySelector(".switch"),
  body = document.querySelector("body"),
  dark = true;

switchBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (dark) {
    switchBtn.innerHTML = `<i class="fas fa-sun"></i>`;
    dark = false;
  } else {
    switchBtn.innerHTML = `<i class="fas fa-moon"></i>`;
    dark = true;
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "Ac":
        display.innerText = "";
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
          if (display.innerText === "undefined") {
            display.innerText = "";
          }
        } catch {
          display.innerText = "Invalide Equation";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
