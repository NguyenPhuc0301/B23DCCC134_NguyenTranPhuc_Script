function createRandomArray(size, min, max) {
    let arr =[]
    for(let i=0; i<size; i++) {
arr.push(Math.floor(Math.random()*(max - min + 1)) + min );
    }
    return arr;
}
function sortArray(arr) {
    return arr.sort((a,b) => a-b );
}
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let randomArray = createRandomArray(10, 1, 20);
document.write("Mảng số nguyên ngẫu nhiên", randomArray.join(","), "<br>")
let sortedArray = sortArray(randomArray);
document.write("Mảng sau khi sắp xếp", sortedArray.join(","), "<br>");
let uniqueArray = removeDuplicates(randomArray);
document.write("Mảng sau khi loại bỏ các phần tử trùng nhau", uniqueArray.join(","), "<br>");