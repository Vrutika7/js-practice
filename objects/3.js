const Input =
    ["hello", "world", "javascript"]

// Output:
// ["HELLO", "WORLD", "JAVASCRIPT"]

function Solution(arr) {
    return arr.map((item) => item.toUpperCase());
}
const answer = Solution(Input);
console.log(answer);