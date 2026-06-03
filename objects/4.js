const Input =
{
    name: "John",
    age: 25,
    city: "Ahmedabad"
}

// Output:
// [
//   { key: "name", value: "John" },
//   { key: "age", value: 25 },
//   { key: "city", value: "Ahmedabad" }
// ]

function Solution(obj) {
    let result = [];
    for (const key in obj) {
        result.push({
            key: key,
            value: obj[key]
        })
    }
    return result;
}

const answer = Solution(Input);
console.log(answer);