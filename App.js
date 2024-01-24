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
    const inputString = document.getElementById(`${type}Input`).value;
    const fromUnit = document.getElementById(`${type}Type`).value;

    
    if (inputString.includes(',')) {
        handleArrayConversion(type);
        return; 
    }

    const inputValue = parseFloat(inputString);
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
    resultContainer.innerHTML = unitLabel;
};


const handleArrayConversion = (type) => {
    const inputString = document.getElementById(`${type}Input`).value;
    const fromUnit = document.getElementById(`${type}Type`).value;

    const inputArray = inputString.split(',').map(item => parseFloat(item.trim()));

    const conversionFunction = getConversionFunction(type, fromUnit, (type === 'distance') ? (fromUnit === 'mi' ? 'km' : 'mi') : (fromUnit === 'lb') ? 'kg' : 'lb');

    const resultArray = inputArray.map(value => {
        const result = conversionFunction(value);
        const toUnit = (type === 'distance') ? (fromUnit === 'mi' ? 'km' : 'mi') : (fromUnit === 'lb') ? 'kg' : (fromUnit === 'C') ? 'F' : 'C';
        return `${value} ${fromUnit} is equal to ${result} ${toUnit}`;
    });

    const resultContainer = document.getElementById(`${type}Result`);
    resultContainer.innerHTML = resultArray.join('<br>');
};



const getConversionFunction = (type, fromUnit, toUnit) => {
    switch (type) {
        case 'weight':
            return (fromUnit === 'lb') ? value => poundsToKilograms(value).toFixed(4) : value => kilogramsToPounds(value).toFixed(2);
        case 'distance':
            return (fromUnit === 'mi') ? value => milesToKilometers(value).toFixed(4) : value => kilometersToMiles(value).toFixed(2);
        case 'temperature':
            return (fromUnit === 'C') ? value => celsiusToFahrenheit(value).toFixed(4) : value => fahrenheitToCelsius(value).toFixed(2);
        default:
            throw new Error(`Invalid type: ${type}`);
    }
};
