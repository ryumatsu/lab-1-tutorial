// Problem #1: GST Calculator
const GST_RATE = 0.15;

function calculateGST() {
   let priceIncGST = parseFloat(document.getElementById("priceIncGST").value);
   let gstAmount = priceIncGST - priceIncGST / (GST_RATE + 1);

   gstAmount = Math.round(gstAmount * 100) / 100;
   document.getElementById("gst").value = gstAmount.toFixed(2);
}

// Problem #2: BMI Calculator
const UNDERWEIGHT = 18.5;
const NORMAL = 25;
const OVERWEIGHT = 30;

function calculateBMI() {
   let height = parseFloat(document.getElementById("height").value);
   let weight = parseFloat(document.getElementById("weight").value);

   let bmi = height > 0 ? (weight / height ** 2) * 703 : 0;
   let bmiMessage;

   if (bmi <= UNDERWEIGHT) {
      bmiMessage = "Underweight";
   } else if (bmi <= NORMAL) {
      bmiMessage = "Normal Weight";
   } else if (bmi <= OVERWEIGHT) {
      bmiMessage = "Overweight";
   } else {
      bmiMessage = "Clinically Obese";
   }

   document.getElementById("bmi").value = bmi.toFixed(1);
   document.getElementById("bmiMessage").value = bmiMessage;
}

// Problem #3: The Largest Number
const NUM_RANDOM = 100;
const LIMIT = 1000;

function generateRandom() {
   let largestNumber = 0;

   for (let i = 0; i < NUM_RANDOM; i++) {
      const randomNumber = Math.floor(Math.random() * (LIMIT + 1));

      if (randomNumber > largestNumber) {
         largestNumber = randomNumber;
      }
   }

   document.getElementById("random").value = largestNumber;
}

// Problem #4: Data Simulation
const SIMULATION_INSTANCES = 100;
const MIN_VALUE = 10000;
const MAX_VALUE = 60000;

function runSimulation() {
   let totalIncome = 0;
   let largestIncome = MIN_VALUE;
   let lowestIncome = MAX_VALUE;

   for (let i = 0; i < SIMULATION_INSTANCES; i++) {
      const randomIncome =
         Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;

      totalIncome += randomIncome;

      if (randomIncome > largestIncome) {
         largestIncome = randomIncome;
      }
      if (randomIncome < lowestIncome) {
         lowestIncome = randomIncome;
      }
   }

   const averageIncome = totalIncome / SIMULATION_INSTANCES;

   document.getElementById("max").value = `$${largestIncome}`;
   document.getElementById("min").value = `$${lowestIncome}`;
   document.getElementById("average").value = `$${averageIncome.toFixed(2)}`;
}

// Problem #5: Fibonacci's Rabbits
function generateRabbits() {
   const numMonths = parseInt(document.getElementById("months").value);
   let rabbitsDiv = document.getElementById("rabbits");

   // Clear previous results
   rabbitsDiv.innerHTML = "";

   // Check if the input is valid
   if (isNaN(numMonths) || numMonths < 1) {
      rabbitsDiv.innerHTML = "Please enter a valid number of months.";
      return;
   }

   // Starting from the third term, as the first two terms are skipped
   let first = 0;
   let second = 1;
   let sum = first + second; // This initializes sum to the third term

   // Loop to generate Fibonacci numbers up to numMonths
   for (let i = 2; i < numMonths; i++) {
      // Start from 2 as we're skipping the first two terms
      sum = first + second;
      first = second;
      second = sum;

      // Create a new div for each month's output and append it to the rabbits div
      let monthDiv = document.createElement("div");
      monthDiv.textContent = `Month ${i}: ${sum} pair(s) of rabbits`;
      rabbitsDiv.appendChild(monthDiv);
   }
}
