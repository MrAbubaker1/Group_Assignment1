
function conversion(x, y) {
    return (value) => {
        switch(x + ' to ' + y) {
            case 'lbs to kgs':
                return value * 2;
            case 'kgs to lbs':
                return value * 2;
            case 'm to km':
                return value * 4;
            case 'km to m':
                return value * 4;
            case 'c to f':
                return value * 6;
            case 'f to c':
                return value * 7;
            
        }
    }
}

function bindConversion() {
    const value = document.getElementById('input').value;
    const x = document.getElementById('x').value;
    const y = document.getElementById('y').value;

    const convert = conversion(x, y);
    const result = convert(value);

    document.getElementById('result').value = result;
}
