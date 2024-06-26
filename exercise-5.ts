

class Calculator {
    
    add(num1: number, num2: number): number {
        this.validateNumbers(num1, num2);
        return num1 + num2;
    }


    minus(num1: number, num2: number): number {
        this.validateNumbers(num1, num2);
        return num1 - num2;
    }
    multiply(num1: number, num2: number): number {
        this.validateNumbers(num1, num2);
        return num1 * num2;
    }

    divide(num1: number, num2: number): number {
        this.validateNumbers(num1, num2);
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
    }

    private validateNumbers(num1: number, num2: number): void {
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            throw new Error("Invalid input. Please provide valid numbers.");
        }
    }
}

let calculator = new Calculator();

console.log("Addition:", calculator.add(10, 5)); 
console.log("Subtraction:", calculator.minus(10, 5)); 
console.log("Multiplication:", calculator.multiply(10, 5)); 
console.log("Division:", calculator.divide(10, 5));  
console.log("Division by zero:", calculator.divide(10, 0)); 
