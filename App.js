// Event listeners for convert buttons
document.addEventListener('DOMContentLoaded', function () {
    const weightButton = document.getElementById('weightButton');
    if (weightButton) {
        weightButton.addEventListener('click', function () {
            handleConversion('weight');
        });
    }

    const distanceButton = document.getElementById('distanceButton');
    if (distanceButton) {
        distanceButton.addEventListener('click', function () {
            handleConversion('distance');
        });
    }

    const temperatureButton = document.getElementById('temperatureButton');
    if (temperatureButton) {
        temperatureButton.addEventListener('click', function () {
            handleConversion('temperature');
        });
    }

    const weightArrayButton = document.getElementById('weightArrayButton');
    if (weightArrayButton) {
        weightArrayButton.addEventListener('click', function () {
            handleConversion('weight');
        });
    }

    const distanceArrayButton = document.getElementById('distanceArrayButton');
    if (distanceArrayButton) {
        distanceArrayButton.addEventListener('click', function () {
            handleConversion('distance');
        });
    }

    const temperatureArrayButton = document.getElementById('temperatureArrayButton');
    if (temperatureArrayButton) {
        temperatureArrayButton.addEventListener('click', function () {
            handleConversion('temperature');
        });
    }
});

// Conversion functions
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

// This function handles unit conversion for a given type (weight, distance, or temperature).
// It does this by detecting whether the input string contains multiple values separated by commas, if it does, it calculates the values using the handleArrayConversion function for array processing.
// Or it converts single values using the appropriate conversion function and updates the result label to display it on the webpage
const handleConversion = (type) => {
    const inputString = document.getElementById(`${type}Input`).value;
    const fromUnit = document.getElementById(`${type}Type`).value;

    if (inputString.includes(',')) {
        handleArrayConversion(type);
        return;
    }

    const inputValue = parseFloat(inputString);
    let result;
    let toUnit;

    if (type === 'temperature') {
        toUnit = (fromUnit === 'C') ? 'F' : 'C';
        result = (fromUnit === 'C') ? celsiusToFahrenheit(inputValue) : fahrenheitToCelsius(inputValue);
    } else {
        toUnit = (type === 'distance') ? (fromUnit === 'mi' ? 'km' : 'mi') : (fromUnit === 'lb' ? 'kg' : 'lb');
        const conversionFunction = getConversionFunction(type, fromUnit, toUnit);
        result = conversionFunction(inputValue);
    }

    const unitLabel = `${inputValue} ${fromUnit} is equal to ${result.toFixed(4)} ${toUnit}`;

    const resultContainer = document.getElementById(`${type}Result`);
    resultContainer.innerHTML = unitLabel;
};

// This function handles calculating multiple values separated by commas for the given type.
// It then takes that input value and uses the correct conversion function to make a formatted result to display on the webpage.
const handleArrayConversion = (type) => {
    const inputString = document.getElementById(`${type}Input`).value;
    const fromUnit = document.getElementById(`${type}Type`).value;

    const inputArray = inputString.split(',').map(item => parseFloat(item.trim()));

    const conversionFunction = getConversionFunction(type, fromUnit, (type === 'distance') ? (fromUnit === 'mi' ? 'km' : 'mi') : (fromUnit === 'lb') ? 'kg' : 'lb');

    const resultArray = inputArray.map(value => {
        const result = conversionFunction(value);
        const toUnit = (type === 'distance') ? (fromUnit === 'mi' ? 'km' : 'mi') : (type === 'weight') ? (fromUnit === 'lb' ? 'kg' : 'lb') : (fromUnit === 'C') ? 'F' : 'C';
        return `${value} ${fromUnit} is equal to ${result.toFixed(4)} ${toUnit}`;
    });

    const resultContainer = document.getElementById(`${type}Result`);
    resultContainer.innerHTML = resultArray.join('<br>');
};


// This function retrieves the appropriate conversion function based on the conversion type and the input unit. The returned function can be used to convert a single value.
const getConversionFunction = (type, fromUnit) => {
    switch (type) {
        case 'weight':
            return (fromUnit === 'lb') ? value => poundsToKilograms(value) : value => kilogramsToPounds(value);
        case 'distance':
            return (fromUnit === 'mi') ? value => milesToKilometers(value) : value => kilometersToMiles(value);
        case 'temperature':
            return (fromUnit === 'C') ? value => celsiusToFahrenheit(value) : value => fahrenheitToCelsius(value);
        default:
            throw new Error(`Invalid type: ${type}`);
    }
};
