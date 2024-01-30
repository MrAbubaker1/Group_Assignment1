let distanceValue = document.getElementById('distanceValue');
let distanceUnit = document.getElementById('distanceUnit');
let distanceConvertedValue = document.getElementById('distanceConvertedValue');


function clearDistanceInput() {
    document.getElementById('distanceValue').value = '';
    document.getElementById('distanceConvertedValue').textContent = '0';
}
distanceValue.addEventListener('input', () => {
    const inputValue = parseFloat(distanceValue.value);
    const selectedUnit = distanceUnit.value;

    function clearDistanceInput() {
        document.getElementById('distanceValue').value = '';
        document.getElementById('distanceConvertedValue').textContent = '0';
    }

    if (!isNaN(inputValue)) {
        if (selectedUnit === 'miles') {
            // Convert to kilometers
            const convertedResult = inputValue * 1.60934;
            distanceConvertedValue.textContent = convertedResult.toFixed(2) + 'km';
        } else if (selectedUnit === 'kilometers') {
            // Convert to miles
            const convertedResult = inputValue / 1.60934;
            distanceConvertedValue.textContent = convertedResult.toFixed(2) + 'miles';
        }
    } else {
        distanceConvertedValue.textContent = 'Invalid input';
    }
});