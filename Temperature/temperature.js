        // Conversion logic for temperature
        let temperatureValue = document.getElementById('temperatureValue');
        let temperatureUnit = document.getElementById('temperatureUnit');
        let temperatureConvertedValue = document.getElementById('temperatureConvertedValue');

        function clearTemperatureInput() {
            document.getElementById('temperatureValue').value = '';
            document.getElementById('temperatureConvertedValue').textContent = '0';
        }
        
        temperatureValue.addEventListener('input', () => {
            const inputValue = parseFloat(temperatureValue.value);
            const selectedUnit = temperatureUnit.value;

            if (!isNaN(inputValue)) {
                if (selectedUnit === 'degrees') {
                    // Convert to Fahrenheit
                    const convertedResult = (inputValue * 9/5) + 32;
                    temperatureConvertedValue.textContent = convertedResult.toFixed(2) + ' F';
                } else if (selectedUnit === 'fahrenheit') {
                    // Convert to degrees Celsius
                    const convertedResult = (inputValue - 32) * 5/9;
                    temperatureConvertedValue.textContent = convertedResult.toFixed(2) + ' C';
                }
            } else {
                temperatureConvertedValue.textContent = 'Invalid input';
            }
        });