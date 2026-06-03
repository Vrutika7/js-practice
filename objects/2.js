const Input =
    ["apple", "banana", "orange"]

// Output:
// [
//   { id: 1, name: "apple" },
//   { id: 2, name: "banana" },
//   { id: 3, name: "orange" }
// ]

function Solution(arr) {
    let result = [];
    let index = 1;
    for (const word of arr) {
        result.push({
            id: index++,
            name: word
        })
    }
    return result;
}

const answer = Solution(Input);
console.log(answer);