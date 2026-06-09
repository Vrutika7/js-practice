const Input =
    [
        { id: 1, name: "TV" },
        { id: 2, name: "Mobile" },
        { id: 1, name: "TV" }
    ]

// Output:
// [
//   { id: 1, name: "TV" },
//   { id: 2, name: "Mobile" }
// ]

function Solution(arr) {
    let unique = new Set();
    let result = [];
    for (const item of arr) {
        if (!unique.has(item.id)) {
            unique.add(item.id);
            result.push(item);
        }
    }
    return result;
}

const answer = Solution(Input);
console.log(answer);
