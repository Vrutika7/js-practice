const Input =
    [
        { category: "Food", amount: 100 },
        { category: "Food", amount: 50 },
        { category: "Travel", amount: 200 }
    ]

// Output:
// {
//   Food: 150,
//   Travel: 200
// }

function Solution(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        //  console.log(arr[i])
        if (result[arr[i].category]) {
            result[arr[i].category] += arr[i].amount
            //  console.log(arr[i]);
        }
        else {
            result[arr[i].category] = arr[i].amount;
        }
    }
    return result;
}

const answer = Solution(Input);
console.log(answer);