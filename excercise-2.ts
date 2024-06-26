
type StringOrBoolean = string | boolean;

let value1: StringOrBoolean = "Hello, world!";
let value2: StringOrBoolean = true;

function displayValue(value: StringOrBoolean): void {
    console.log("The value is:", value);
}

displayValue(value1); 
displayValue(value2); 
