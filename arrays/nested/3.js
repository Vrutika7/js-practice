const Input =
{
    user: {
        id: 1,
        name: "John"
    }
}

// Output:
// {
//   userId: 1,
//   userName: "John"
// }

function Solution(obj) {
    let result = {};
    for (const key in obj) {
        result.userId = obj[key].id,
            result.userName = obj[key].name

    }
    return result;
}
const answer = Solution(Input);
console.log(answer);