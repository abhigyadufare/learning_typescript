const add = (x: number, y: number): string => {
    console.log((x+y).toString());
    return (x + y).toString();
}

add(8, 6);

const minus = (a: number, b: number) => {
    console.log(a - b);
    return a - b;
}

minus(8, 6);


const multiply = (m: number, n: number) => {
    console.log(`Multiplying ${m} with ${n} is equals to ${m * n}`)
    return m * n;
}

multiply(8, 6);


const divide = (g: number, h: number) => {
    console.log(`Division of ${g} with ${h} gives you ${g / h}`);
    return g / h;
}

divide(8, 6);


const remainder = (u: number, t: number) => {
    console.log(`Remainder of ${u} diveded by ${t} is ${u % t}`);
    return u % t;
}

remainder(75, 9);


const factorial = (n: number): number => {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

factorial(80);

// // Example usage:
// const num = 5;
// console.log(`The factorial of ${num} is ${factorial(num)}`);
