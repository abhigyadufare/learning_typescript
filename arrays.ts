let numbers: number[] = [1, 2, 3];  // Type is explicitly set as an array of numbers
numbers.push(4);  // This is fine, as 4 is a number

// Accessing array method
console.log(numbers.length); 


function manageArray<T>(array: T[], action: "add" | "remove", item?: T): T[] {
    if (action === "add") {
        if (item === undefined) {
            throw new Error("Item must be provided for 'add' action");
        }
        // Add the item to the end of the array
        array.push(item);
    } else if (action === "remove") {
        if (item === undefined) {
            // Remove the last item if no specific item is provided
            array.pop();
        } else {
            // Remove the first occurrence of the specified item
            const index = array.indexOf(item);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
    } else {
        throw new Error("Invalid action. Use 'add' or 'remove'.");
    }

    return array;
}

// Example usage:
let myArray: number[] = [1, 2, 3];

// Add an item to the array
myArray = manageArray(myArray, "add", 4);
console.log(myArray); // Output: [1, 2, 3, 4]

// Remove an item from the array
myArray = manageArray(myArray, "remove", 2);
console.log(myArray); // Output: [1, 3, 4]

// Remove the last item from the array
myArray = manageArray(myArray, "remove");
console.log(myArray); // Output: [1, 3]


function calculateLCM(a: number, b: number): number {
    // Helper function to calculate the Greatest Common Divisor (GCD) using Euclidean algorithm
    function calculateGCD(x: number, y: number): number {
        while (y !== 0) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    // Calculate LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
    return (a * b) / calculateGCD(a, b);
}

function findCommonMultiples(a: number, b: number, limit: number): number[] {
    const lcm = calculateLCM(a, b); // Use the LCM function from above
    const commonMultiples: number[] = [];

    for (let i = lcm; i <= limit; i += lcm) {
        commonMultiples.push(i);
    }

    return commonMultiples;
}

// Example usage:
const num1 = 4;
const num2 = 6;
const limit = 50; // Find common multiples up to 50
const multiples = findCommonMultiples(num1, num2, limit);
console.log(`Common multiples of ${num1} and ${num2} up to ${limit}:`, multiples);
