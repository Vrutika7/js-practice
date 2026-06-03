const Input =
    [
        ["John", 25],
        ["Jane", 30]
    ]

// Output:
// [
//   {
//     name: "John",
//     age: 25
//   },
//   {
//     name: "Jane",
//     age: 30
//   }
// ]

function Solution(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {

        result.push({
            name: arr[i][0],
            age: arr[i][1]
        })

    }
    return result;
}
const answer = Solution(Input);
console.log(answer);