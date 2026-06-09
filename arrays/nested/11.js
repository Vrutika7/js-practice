const Input =
    [
        {
            category: "Electronics",
            items: ["TV", "Mobile"]
        }
    ]

// Output:
// [
//   "Electronics > TV",
//   "Electronics > Mobile"
// ]

function Solution(arr) {
    let result = [];
    for (const item of arr) {
        for (let i = 0; i < item.items.length; i++) {
            result.push(`${item.category} > ${item.items[i]}`)
        }
    }
    return result;
}

const answer = Solution(Input);
console.log(answer);