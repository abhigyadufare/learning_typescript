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
