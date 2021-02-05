window.addEventListener("DOMContentLoaded", SettingUp);

function SettingUp() {
  console.log("it works");
  document.querySelector("#calculate").addEventListener("click", calc);
}

function calc() {
  let val1 = parseInt(document.querySelector("#firstnumber").value);
  let val2 = parseInt(document.querySelector("#secondnumber").value);
  let operator = document.querySelector("#operator").value;
  let calculated;

  if (operator == "add") {
    calculated = val1 + val2;
  } else if (operator == "sup") {
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
  var node = document.createElement("LI");
  var textnode = document.createTextNode(calculated);
  node.appendChild(textnode);

  var list = document.getElementById("results");
  list.insertBefore(node, list.childNodes[0]);

  document.querySelector("#clear").addEventListener("click", removeAll);
}

function removeAll() {
  document.getElementById("results").innerHTML = "0";
}
