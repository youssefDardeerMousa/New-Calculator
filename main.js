let numbers = document.querySelector(".numbers"); // ul list buttons 1 2 3 ..
let input = document.querySelector("#numbers"); // screen
let igual = document.querySelector(".igual"); // result
let Remove = document.querySelector(".Remove");

let sum = "";
numbers.addEventListener("click", function (e) {
  sum += e.target.id;
  input.value = sum;
});

Remove.addEventListener("click", () => {
  sum = "";
  input.value = sum;
});

igual.addEventListener("click", () => {
  try {
    sum = eval(input.value);
    if (isNaN(sum) || !isFinite(sum)) {
      throw new Error("Invalid input");
    }
    input.value = sum;
    console.log(sum);
  } catch (error) {
    sum="Syntax Error"
    input.value = sum;
    console.error("Syntax Error");
  }
});
