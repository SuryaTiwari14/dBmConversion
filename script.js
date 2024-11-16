function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (isNaN(inputValue)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  let valueInWatts;

  // Convert from the selected unit to Watts
  switch (fromUnit) {
    case "dbm":
      valueInWatts = Math.pow(10, (inputValue - 30) / 10);
      break;
    case "watt":
      valueInWatts = inputValue;
      break;
    case "mw":
      valueInWatts = inputValue / 1000;
      break;
    case "kw":
      valueInWatts = inputValue * 1000;
      break;
    default:
      valueInWatts = 0;
  }

  // Convert from Watts to the selected target unit
  let result;
  switch (toUnit) {
    case "dbm":
      result = 10 * Math.log10(valueInWatts) + 30;
      break;
    case "watt":
      result = valueInWatts;
      break;
    case "mw":
      result = valueInWatts * 1000;
      break;
    case "kw":
      result = valueInWatts / 1000;
      break;
    default:
      result = 0;
  }

  document.getElementById("result").innerText = `Converted Value: ${result.toFixed(4)} ${toUnit}`;
}
