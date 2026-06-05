const Input =
    [
        { name: "John", department: "IT" },
        { name: "Jane", department: "HR" },
        { name: "Mike", department: "IT" }
    ]

// Output:
// {
//   IT: ["John", "Mike"],
//   HR: ["Jane"]
// }

function Solution(arr) {
    let result = {};
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        const { name, department } = arr[i];
        if (!result[department]) {
            result[department] = []
        }
        result[department].push(name);
    }
    return result;
}

const answer = Solution(Input);
console.log(answer);