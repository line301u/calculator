window.addEventListener("DOMContentLoaded", SettingUp);

function SettingUp() {
  console.log("it works");
  document.querySelector("#calculate").addEventListener("click", calc);
}

function calc() {
  let val1 = parseFloat(document.querySelector("#firstnumber").value);
  let val2 = parseFloat(document.querySelector("#secondnumber").value);
  let operator = document.querySelector("#operator").value;
  let calculated;

  if (operator == "add") {
    calculated = val1 + val2;
  } else if (operator == "sub") {
    calculated = val1 - val2;
  } else if (operator == "mul") {
    calculated = val1 * val2;
  } else if (operator == "div") {
    calculated = val1 / val2;
  }
  console.log(calculated);

  showResult(calculated);
}

function showResult(calculated) {
  console.log("show results");
  let num = calculated;
  let n;
  let option = document.querySelector("#decimals").value;

  if (option == "0") {
    n = num.toFixed(0);
    console.log(n);
  } else if (option == "1") {
    n = num.toFixed(1);
  } else if (option == "2") {
    n = num.toFixed(2);
  } else if (option == "3") {
    n = num.toFixed(3);
  } else if (option == "4") {
    n = num.toFixed(4);
  } else if (option == "5") {
    n = num.toFixed(5);
  } else if (option == "6") {
    n = num.toFixed(6);
  } else if (option == "7") {
    n = num.toFixed(7);
  } else if (option == "8") {
    n = num.toFixed(8);
  }

  let node = document.createElement("LI");
  let textnode = document.createTextNode(n);
  node.appendChild(textnode);

  let list = document.getElementById("results");
  list.insertBefore(node, list.childNodes[0]);

  document.querySelector("#clear").addEventListener("click", removeAll);
}

function removeAll() {
  document.getElementById("results").innerHTML = "0";
}
