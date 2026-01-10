// Convert celsius to fahrenheit
function convertTemp() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const celsiusValue = parseFloat(celsiusInput.value);
  if (isNaN(celsiusValue)) {
    fahrenheitInput.value = "";
    return false;
  }
  const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
  fahrenheitInput.value = fahrenheitValue;
  return true;
}

// Convert kilo to pounds
function convertWeight() {
  const kiloInput = document.getElementById("kilo");
  const poundsInput = document.getElementById("pounds");
  const kiloValue = parseFloat(kiloInput.value);
  console.log("Kilo value: " + kiloValue);
  if (isNaN(kiloValue)) {
    poundsInput.value = "";
    return false;
  }
  const poundsValue = kiloValue * 2.205;
  poundsInput.value = poundsValue;
  return true;
}

// Convert kilometres to miles
function convertDistance() {
  const kilometerInput = document.getElementById("km");
  const milesInput = document.getElementById("miles");
  const kilometerValue = parseFloat(kilometerInput.value);
  if (isNaN(kilometerValue)) {
    milesInput.value = "";
    return false;
  }
  const milesValue = kilometerValue / 1.609;
  milesInput.value = milesValue;
  return true;
}
