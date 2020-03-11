var diameter;
const pi = 3.14;
var text;
text = "de omtrek van de cirkel is ";
function calculate() {
  diameter = document.getElementById("num");
  diameter = diameter.value;
  result = pi * diameter;
  document.getElementById("output").innerText = text + result;
}
