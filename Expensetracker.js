let expenses = [
    { name: "Tea", price: 20 },
    { name: "Coffee", price: 50 },
    { name: "Pizza", price: 200 }
];

let total = 0;
let highest = expenses[0];
let lowest = expenses[0];

for (let i = 0; i < expenses.length; i++) {
    total = total + expenses[i].price;

    if (expenses[i].price > highest.price) {
        highest = expenses[i];
    }

    if (expenses[i].price < lowest.price) {
        lowest = expenses[i];
    }
}

console.log("Total Expense:", total);
console.log("Highest Expense:", highest.name, highest.price);
console.log("Lowest Expense:", lowest.name, lowest.price);