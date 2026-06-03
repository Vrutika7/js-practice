const Input =
{
    fruits: ["apple", "banana"],
    vegetables: ["potato", "onion", "tomato"]
}

// Output:
// {
//   fruits: 2,
//   vegetables: 3
// }

function Solution(obj) {
    let result = {};
    for (const key in obj) {
        // result.key:obj[key].length
        // console.log(key)
        // console.log(obj[key].length)
        result[key] = obj[key].length


    }
    return result;
}
const answer = Solution(Input);
console.log(answer);