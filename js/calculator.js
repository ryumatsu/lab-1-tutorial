// JavaScript:
// Add the values from input fields
function add() {
   let operand1 = document.querySelector("#operand1").value;
   operand1 = parseInt(operand1, 10);

   let operand2 = document.querySelector("#operand2").value;
   operand2 = parseInt(operand2, 10);

   let result = operand1 + operand2;

   document.querySelector("#result").value = result;
}

// Substract the values from input fields
function subtract() {
   let operand1 = parseInt(document.querySelector("#operand1").value, 10);
   let operand2 = parseInt(document.querySelector("#operand2").value, 10);

   let result = operand1 - operand2;

   document.querySelector("#result").value = result;
}

// Multiply the values from input fields
function multiply() {
   let operand1 = parseInt(document.querySelector("#operand1").value, 10);
   let operand2 = parseInt(document.querySelector("#operand2").value, 10);

   let result = operand1 * operand2;

   document.querySelector("#result").value = result;
}

// Divide the values from input fields
function divide() {
   let operand1 = parseInt(document.querySelector("#operand1").value, 10);
   let operand2 = parseInt(document.querySelector("#operand2").value, 10);

   let result = operand1 / operand2;

   document.querySelector("#result").value = result;
}

// Clear input fields
function clearInput() {
   document.querySelector("#operand1").value = "";
   document.querySelector("#operand2").value = "";
   document.querySelector("#result").value = "";
}
