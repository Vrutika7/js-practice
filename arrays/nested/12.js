const Input =
    [
        {
            month: "Jan",
            sales: 100
        },
        {
            month: "Feb",
            sales: 200
        }
    ]

// Output:
// {
//   Jan: 100,
//   Feb: 200
// }

function Solution(arr) {
    let result = {};
    for (const item of arr) {
        result[item.month] = item.sales
    }
    return result;
}

const answer = Solution(Input);

console.log(answer);