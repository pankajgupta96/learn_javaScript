const inputname = document.querySelector("#name");
const hindimarks = document.querySelector("#hindiinput");
const englishmarks = document.querySelector("#englishinput");
const mathmarks = document.querySelector("#mathinput");
const Chemsitrymarks = document.querySelector("#Chemsitryinput");
const Physicsmarks = document.querySelector("#Physicsinput");
const resultbox = document.querySelector("#result");
const resultbtn = document.querySelector("#show-result");

// function getName(){
//     return studentname || "";
// }

// function hindi(){
//     var hindinumber = +hindimarks.value;
//     return hindinumber;
// }

// function english(){
//     var englishnumber = +englishmarks.value;
//     return englishnumber;
// }

// function math(){
//     var mathnumber = +mathmarks.value;
//     return mathnumber;
// }
// function Physics(){
//     var Physicsnumber = +Physicsmarks.value;
//     return Physicsnumber;
// }

// function Chemsitry(){
//     var Chemsitrynumber = +Chemsitrymarks.value;
//     return Chemsitrynumber;
// }

let totalsum;

function updateResult() {
  totalsum =
    +hindimarks.value +
    +englishmarks.value +
    +mathmarks.value +
    +Physicsmarks.value +
    +Chemsitrymarks.value;

  resultbox.innerHTML = totalsum;
}

function validateMarksInput(inputField) {
  let value = Number(inputField.value);

  if (value < 0 || value > 100 || isNaN(value)) {
    alert("Please enter a value between 0 and 100");
    inputField.value = "";
  }
}

hindimarks.addEventListener("input", function () {
  validateMarksInput(hindimarks);
  updateResult();
});
englishmarks.addEventListener("input", function () {
  validateMarksInput(englishmarks);
  updateResult();
});
mathmarks.addEventListener("input", function () {
  validateMarksInput(mathmarks);
  updateResult();
});
Physicsmarks.addEventListener("input", function () {
  validateMarksInput(Physicsmarks);
  updateResult();
});
Chemsitrymarks.addEventListener("input", function () {
  validateMarksInput(Chemsitrymarks);
  updateResult();
});

function showresult() {
  let nameInput = inputname.value.trim();
  if (inputname.value === "") {
    alert("please enter the name");
    return;
  }

  let totalnumber = totalsum;
  let Percent = (totalnumber / 500) * 100;

  if (Percent >= 90) {
    alert(`Hi ${nameInput} you came in merit 🎉`);
  } else if (Percent >= 60 && Percent < 90) {
    alert(`Hi ${nameInput} you passed with 1st division 🏆`);
  } else if (Percent >= 45 && Percent < 60) {
    alert(`Hi ${nameInput} you passed with 2nd division 👍`);
  } else if (Percent >= 33 && Percent < 45) {
    alert(`Hi ${nameInput} you passed with 3rd division 🙂`);
  } else if (Percent >= 0 && Percent < 33) {
    alert(`Hi ${nameInput} you failed 😢`);
  } else {
    alert(`wrong Percentage`);
  }
}

resultbtn.addEventListener("click", showresult);
