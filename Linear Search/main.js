function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}


var states = ["Abia", "Imo", "Anambra", "Enugu", "Ebonyi"];
var targetState = "Imo";
var resultLinearSearch = linearSearch(states, targetState);
console.log(`Linear Search: ${targetState} is at index ${resultLinearSearch}`);
