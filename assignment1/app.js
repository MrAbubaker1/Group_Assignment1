

// conversion logic
function conversion(x, y) {
    return (value) => {
        switch(x + " to " + y) {
            case "lbs to kgs":
                return value * 0.453592;
            case "kgs to lbs":
                    return value * 2.20462;
            case "m to km":
                return value * 1.60934;
            case "km to m":
                return value / 1.60934;
            case "c to f":
                return (value * 9/5) + 32;
            case "f to c":
                return (value - 32) * 5/9;
            default:
                return "Error";
        }
    }
}

// function to update second filed based on value in first field using unit mapping
function updateSecondField() {
    const xValue = x.value; 

    const unitMapping = {
        "lbs": "kgs",
        "kgs": "lbs",
        "m": "km",
        "km": "m",
        "c": "f",
        "f": "c",
    };
        
    if (xValue in unitMapping) {
        document.getElementById("y").value = unitMapping[xValue];
    }
}
    

// function to perform conversion when button is clicked
function bindConversion() {
    const value = document.getElementById("input").value;
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;

    const result = conversion(x, y)(value);

    
    document.getElementById("result").value = result; 
}
