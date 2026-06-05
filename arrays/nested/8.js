const Input =
    [
        { name: "TV", price: 20000 },
        { name: "Mobile", price: 50000 },
        { name: "Laptop", price: 70000 }
    ]

// Output:
// {
//   name: "Laptop",
//   price: 70000
// }

function Solution(arr) {
    let result = {};
    let maxPrice = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price > maxPrice) {
            maxPrice = arr[i].price;
        }
        result.name = arr[i].name
        result.price = maxPrice;
    }
    return result;
}
const answer = Solution(Input);
console.log(answer);