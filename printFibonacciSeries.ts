function printFibonacciSeries(n: number): void {
    // Handle edge cases
    if (n <= 0) {
        console.log('Please provide a positive number of terms');
        return;
    }

    // Initialize the first two numbers of the series
    let a: number = 0;
    let b: number = 1;

    // Print the series
    console.log('Fibonacci Series:');
    for (let i = 0; i < n; i++) {
        console.log(a);
        
        // Calculate the next number
        const next: number = a + b;
        a = b;
        b = next;
    }
}

// Example usage
printFibonacciSeries(10);
