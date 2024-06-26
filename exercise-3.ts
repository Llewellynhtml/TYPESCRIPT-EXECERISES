
function sum(a: number, b: number): number {
    return a + b;
}


let result = sum(5, 7);
console.log(result); 

function getFixedNumber(): number {
    return 42;
}

let fixedNumber = getFixedNumber();
console.log(fixedNumber); 


function transformString(str: string, toUpperCase?: boolean): string {
    if (toUpperCase) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

let transformedString1 = transformString("Hello, TypeScript!", true);
console.log(transformedString1); 

let transformedString2 = transformString("Hello, TypeScript!");
console.log(transformedString2); 
