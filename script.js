const num1 = prompt("First number:");
const num2 = prompt("Second number:");

// Convert to number
const a = Number(num1);
const b = Number(num2);

// Validate inputs
if (num1 === "" || num2 === "" || isNaN(a) || isNaN(b)) {
    alert("Invalid input. Please enter a valid number.");
} else {
    const sum = a + b;
    alert(`The sum of ${a} and ${b} is ${sum}.`);
}
