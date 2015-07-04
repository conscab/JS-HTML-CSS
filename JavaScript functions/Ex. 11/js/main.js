var inputString = [1,3,4,567,78,6,6,54,4,33,3, 77,66,88,45454,34343,23232];
console.log(inputString);


function sortNumbers(a,b) {
    return a - b;
}

var sorted = inputString.sort(sortNumbers);

console.log(sorted);
console.log(sorted[1], sorted[sorted.length-2]);

