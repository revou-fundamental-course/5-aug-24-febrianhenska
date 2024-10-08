// JavaScript
const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

// function reset
function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "N/A";
}

// function submit/bmi count
function onFormSubmit(e) {
  e.preventDefault();
  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid number");
    return;
  }

  const heightInMeters = height / 100; // cm to meters
  const bmi = weight / Math.pow(heightInMeters, 2); // bmi = weight / height^2
  const desc = interpretBMI(bmi); // healthy, overweight, obese

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `You are <strong>${desc}</strong>`;
}

// function interpret/classification
function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi < 25) {
    return "healthy";
  } else if (bmi < 30) {
    return "overweight";
  } else {
    return "obese";
  }
}
