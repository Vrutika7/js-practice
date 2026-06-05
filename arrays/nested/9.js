const Input =
    [
        { id: 1, parentId: null, name: "Electronics" },
        { id: 2, parentId: 1, name: "TV" },
        { id: 3, parentId: 1, name: "Mobile" }
    ]

// Output:
// [
//   {
//     id: 1,
//     name: "Electronics",
//     children: [
//       {
//         id: 2,
//         name: "TV"
//       },
//       {
//         id: 3,
//         name: "Mobile"
//       }
//     ]
//   }
// ]

function Solution(arr) {
    let map = {};
    let result = [];
    for (const item of arr) {
        map[item.id] = {
            id: item.id,
            name: item.name,
            children: []
        }
    }
    for (const item of arr) {
        if (item.parentId === null) {
            result.push(map[item.id])
        }
        else {
            map[item.parentId].children.push(map[item.id])
        }
    }
    return result;
}
const answer = Solution(Input);
console.dir(answer, { depth: null });