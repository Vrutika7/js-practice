const Input =
    ["apple", "banana", "apple", "apple"]

// Output:
// {
//   apple: 3,
//   banana: 1
// }

function Solution(arr) {
    let result = {};
    let count = 0
    for (let i = 0; i < arr.length; i++) {

        if (result[arr[i]]) {
            result[arr[i]]++;
        }
        else {

            result[arr[i]] = 1;
        }
    }
    return result;
}
const answer = Solution(Input);
console.log(answer);