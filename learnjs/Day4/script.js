let btnx = document.querySelector(".button1");
let btno = document.querySelector(".button2");
let inputbtn = document.querySelector(".inputbtn");

let userinput;

function inputhandler() {
  var input = prompt("enter the number");
  userinput = parseInt(input);

  if (userinput < 0 || userinput > 9) {
    alert("plz enter the value between 0 to 8");
  }

  if (input === null) {
    let confirmtext = confirm("Are you sure");
    if (confirmtext === false) {
      inputhandler();
    } else {
      return;
    }
  } else {
    const selector2 = `.container :nth-child(${userinput + 1})`;
    let box2 = document.querySelector(selector2);
    box2.style.backgroundColor = "green";
  }
}

inputbtn.addEventListener("click", inputhandler);

function clickOnX(userinput) {
  const selector = `.container :nth-child(${userinput + 1}) .draw`;
  let box = document.querySelector(selector);

  
  let value = box.innerText;
  if (value === "X" || value === "O") {
    return;
  }

  if (box) {
    box.innerText = "X";
    btnx.disabled = true;
    btno.disabled = false;

  } else {
    console.error("box is not found");
  }
}

function clickOnO(userinput) {
  const selector = `.container :nth-child(${userinput + 1}) .draw`;
  let box = document.querySelector(selector);



  let value = box.innerText;
  if (value === "X" || value === "O") {
    return;
  }

  if (box) {
    box.innerText = "O";
    btnx.disabled = false;
    btno.disabled = true;
  } else {
    console.error("box is not found");
  }
}
