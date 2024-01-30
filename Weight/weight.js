              // Conversion logic for weight
              let weightValue = document.getElementById('weightValue');
              let weightUnit = document.getElementById('weightUnit');
              let weightConvertedValue = document.getElementById('weightConvertedValue');
      
              function clearWeightInput() {
                  document.getElementById('weightValue').value = '';
                  document.getElementById('weightConvertedValue').textContent = '0';
              }
      
              weightValue.addEventListener('input', () => {
                  const inputValue = parseFloat(weightValue.value);
                  const selectedUnit = weightUnit.value;
                  
      
                  if (!isNaN(inputValue)) {
                      if (selectedUnit === 'kg') {
                          // Convert to pounds
                          const convertedResult = inputValue * 2.20462;
                          weightConvertedValue.textContent = convertedResult.toFixed(2) + 'lbs';
                      } else if (selectedUnit === 'lbs') {
                          // Convert to kilograms
                          const convertedResult = inputValue / 2.20462;
                          weightConvertedValue.textContent = convertedResult.toFixed(2) + 'kg';
                      }
                  } else {
                      weightConvertedValue.textContent = 'Invalid input';
                  }
              });