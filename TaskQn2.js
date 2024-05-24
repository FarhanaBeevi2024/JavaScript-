//2) Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function findSubset(data) {
  var result = [];
  for (var m = 0; m < data.length; m++) {
    for (var n = m + 1; n < data.length + 1; n++) {
      result.push(data.slice(m, n));
    }
  }
  return result;
}

console.log(findSubset("dog"));
