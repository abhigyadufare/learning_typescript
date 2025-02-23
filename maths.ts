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
