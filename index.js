document.addEventListener("DOMContentLoaded", function () {
  //обработчик событий
  const keys = document.querySelectorAll(".button"); // получение всех селекторов кнопки
  const display = document.querySelector("#display"); // получение селектора дисплэй
  let decimalAdded = false; // незн

  keys.forEach((key) => {
    key.addEventListener("click", function () {
      const btnVal = this.innerHTML;
      const displayVal = display.value;

      if (btnVal === "C") {
        display.value = "";
        decimalAdded = false;
      } else if (btnVal === "=") {
        let equation = displayVal;
        let lastChar = equation[equation.length - 1];

        if (["+", "-", "*", "/", "%"].includes(lastChar) || lastChar === ".") {
          equation = equation.slice(0, -1);
        }

        if (equation) {
          display.value = eval(equation);
        }

        decimalAdded = false;
      } else if (btnVal === "DEL") {
        display.value = displayVal.slice(0, -1);
      } else if (["+", "-", "*", "/", "%"].includes(btnVal)) {
        const lastChar = displayVal[displayVal.length - 1];

        if (
          displayVal !== "" &&
          !["+", "-", "*", "/", "%"].includes(lastChar)
        ) {
          display.value += btnVal;
        } else if (displayVal === "" && btnVal === "-") {
          display.value += btnVal;
        }

        if (
          ["+", "-", "*", "/", "%"].includes(lastChar) &&
          displayVal.length > 1
        ) {
          display.value = displayVal.slice(0, -1) + btnVal;
        }

        decimalAdded = false;
      } else if (btnVal === ".") {
        if (!decimalAdded) {
          display.value += btnVal;
          decimalAdded = true;
        }
      } else {
        display.value += btnVal;
      }
    });
  });
});
