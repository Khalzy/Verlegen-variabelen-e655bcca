const pi = 3.14;
let numWaarde;
let result;
let text;

function calculate() {
  text = "omtrek: ";
  numWaarde = document.getElementById("num").value;
  result = pi * numWaarde;
  document.getElementById("output").innerText = text + result;

  {
    text = "oppervlakte: ";
    numWaarde = (numWaarde * 1) / 2;
    result = numWaarde * numWaarde * pi;
    document.getElementById("output1").innerText = text + result;
  }
}
