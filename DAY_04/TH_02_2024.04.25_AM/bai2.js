
const numbers = [10, 25, 36, 49, 16, 81, 5, 12, 20];
function findMaxNumber(arr) {
    return Math.max(...arr);
}
function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}
function findPerfectSquares(arr) {
    return arr.filter(num => isPerfectSquare(num));
}
function calculateAverage(arr) {
    const nonNegativeNumbers = arr.filter(num => num >= 0);
    const sum = nonNegativeNumbers.reduce((acc, curr) => acc + curr, 0);
    return sum / nonNegativeNumbers.length;
}
function findNumbersGreaterThanAverage(arr) {
    const average = calculateAverage(arr);
    return arr.filter(num => num > average);
}
console.log("Mảng số nguyên:", numbers);
console.log("Số nguyên lớn nhất trong mảng:", findMaxNumber(numbers));
console.log("Các số chính phương trong mảng:", findPerfectSquares(numbers));
console.log("Trung bình cộng của các số không âm trong mảng:", calculateAverage(numbers));
console.log("Các số lớn hơn trung bình cộng của mảng:", findNumbersGreaterThanAverage(numbers));
