//Task 1: Working with Arrays
let products = ["iPhone", "iPad", "iMac", "MacBook", "AirPods"]; //declaring 5 products with an array
products.push("Apple TV"); //adding new product to the array
console.log(products);
products.pop();//removed the last product
console.log("Updated list of products: ", products);

//Task 2: Accessing and Modifying Arrays
 let products = [5, 10, 15, 20, 25]; //declaring an array scores
 scores[1] = 11; //changed the second score in the array

 let total = scores.reduce((a, b) => a + b, 0); //calculatinng the total of all the scores
let average = total/scores.length; //calculating the average of all the scores
console.log("Updated Scores: ", scores);
console.log(total);
console.log("Average Score: ", average);

//Task 3 - Working with Objects
// declaring multiple properties for an object
let employee = 
 { 
    name : "Steve Jobs",
    age: 52,
    department: "Tech", 
    isActive: true
 };
 console.log(employee);
 employee.department = "Finance"; //changing the employee's department
 console.log(employee);

 //Task 4 - Array of Objects
 let customers = 
 [
    { name: "Steve Wozniak", email: "stevewoz@icloud.com", purchaseAmount: 100 },
    { name: "Mark Zuckerburg", email: "zuckerburg@icloud.com", purchaseAmount: 125 },
    { name: "Eduardo Severin", email: "eseverin@icloud.com", purchaseAmount: 150 }
 ]; //customer arrays with objects
 
 