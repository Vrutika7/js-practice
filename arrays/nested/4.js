const Input =
    [
        ["a", "b"],
        ["c", "d"]
    ]
//flatten array
// Output:
// ["a", "b", "c", "d"]

function Solution(arr) {
    // return arr.flat(); inbuilt method
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            result.push(arr[i][j]);
        }
    }
    return result;
}

const answer = Solution(Input);
console.log(answer);