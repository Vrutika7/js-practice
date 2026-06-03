const Input =
    [
        {
            category: "Electronics",
            items: ["TV", "Mobile"]
        },
        {
            category: "Furniture",
            items: ["Chair"]
        }
    ]

// Output:
// [
//   {
//     category: "Electronics",
//     item: "TV"
//   },
//   {
//     category: "Electronics",
//     item: "Mobile"
//   },
//   {
//     category: "Furniture",
//     item: "Chair"
//   }
// ]

function Solution(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i]

        let itemsArr = arr[i].items;
        for (let j = 0; j < itemsArr.length; j++) {
            result.push({
                category: arr[i].category,
                item: itemsArr[j]
            })
        }

    }
    return result;
}

const answer = Solution(Input);
console.log(answer);