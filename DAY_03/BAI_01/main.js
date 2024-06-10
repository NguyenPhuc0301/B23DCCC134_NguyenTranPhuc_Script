function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
function productOfNumbers(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
let numbers = [];
for (let i = 0; i < 5; i++) {
    let input = parseInt(prompt("Nhập số thứ " + (i + 1) + ":"));
    numbers.push(input);
}
let total = sumOfNumbers(numbers);
document.write("Tổng của các số là: " + total + '<br/>');
let product = productOfNumbers(numbers);
document.write("Tích của các số là: " + product + '<br/>');
let n = parseInt(prompt("Nhập số để tính giai thừa:"));
let result = factorial(n);
document.write("Giai thừa của " + n + " là: " + result);