document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('weightButton').addEventListener('click', function () {
      handleConversion('weight');
    });
  
    document.getElementById('distanceButton').addEventListener('click', function () {
      handleConversion('distance');
    });
  
    document.getElementById('temperatureButton').addEventListener('click', function () {
      handleConversion('temperature');
    });
  });
  
  const poundsToKilograms = (pounds) => {
    return pounds * 0.45359237;
  };
  
  const kilogramsToPounds = (kilograms) => {
    return kilograms * 2.20462;
  };
  
  const milesToKilometers = (miles) => {
    return miles * 1.60934;
  };
  
  const kilometersToMiles = (kilometers) => {
    return kilometers / 1.60934;
  };
  
  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };
  
  const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
  };
  
  const handleConversion = (type) => {
    const inputValue = parseFloat(document.getElementById(`${type}Input`).value);
    const fromUnit = document.getElementById(`${type}Type`).value;
  
    let result, toUnit;
  
    if (type === 'temperature') {
      toUnit = (fromUnit === 'C') ? 'F' : 'C';
      result = (fromUnit === 'C') ? celsiusToFahrenheit(inputValue) : fahrenheitToCelsius(inputValue);
    } else {
      toUnit = (type === 'distance') ? (fromUnit === 'mi' ? 'km' : 'mi') : (fromUnit === 'lb' ? 'kg' : 'lb');
      const conversionFunction = getConversionFunction(type, fromUnit, toUnit);
      result = conversionFunction(inputValue);
    }
  
    const unitLabel = `${inputValue} ${fromUnit} is equal to ${result} ${toUnit}`;
  
    const resultContainer = document.getElementById(`${type}Result`);
    resultContainer.textContent = unitLabel;
  };
  
  const getConversionFunction = (type, fromUnit, toUnit) => {
    switch (type) {
      case 'weight':
        return (fromUnit === 'lb') ? value => poundsToKilograms(value).toFixed(2) : value => kilogramsToPounds(value).toFixed(2);
      case 'distance':
        return (fromUnit === 'mi') ? value => milesToKilometers(value).toFixed(2) : value => kilometersToMiles(value).toFixed(2);
      case 'temperature':
        return (fromUnit === 'C') ? value => celsiusToFahrenheit(value).toFixed(2) : value => fahrenheitToCelsius(value).toFixed(2);
      default:
        throw new Error(`Invalid type: ${type}`);
    }
  };
  