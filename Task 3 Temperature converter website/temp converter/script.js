// Get references to the UI elements
const tempInput = document.getElementById('temp-input');
const tempUnit = document.getElementById('temp-unit');
const convertBtn = document.getElementById('convert-btn');
const convertedTemp = document.getElementById('converted-temp');

// Add event listener to the convert button
convertBtn.addEventListener('click', () => {
  // Get the input temperature and unit
  const temp = parseFloat(tempInput.value);
  const unit = tempUnit.value;

  // Check if the input is a valid number
  if (isNaN(temp)) {
    alert('Please enter a valid number!');
    return;
  }

  // Convert the temperature to the other unit
  let converted;
  if (unit === 'celsius') {
    converted = (temp * 1.8) + 32;
    converted = converted.toFixed(2) + '°F';
  } else {
    converted = (temp - 32) * 5/9;
    converted = converted.toFixed(2) + '°C';
  }

  // Display the converted temperature
  convertedTemp.textContent = converted;
});
