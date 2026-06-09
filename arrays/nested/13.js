const Input =
{
    1: {
        10: ["TV", "Mobile"]
    },
    2: {
        20: ["Chair"]
    }
}

// Output:
// [
//   {
//     categoryId: 1,
//     subCategoryId: 10,
//     name: "TV"
//   },
//   {
//     categoryId: 1,
//     subCategoryId: 10,
//     name: "Mobile"
//   },
//   {
//     categoryId: 2,
//     subCategoryId: 20,
//     name: "Chair"
//   }
// ]

function Solution(obj) {
    let result = [];
    for (const categoryId in obj) {
        for (const subCategoryId in obj[categoryId]) {
            for (const name of obj[categoryId][subCategoryId]) {
                result.push({
                    categoryId: Number(categoryId),
                    subCategoryId: Number(subCategoryId),
                    name
                })

            }
        }
    }
    return result;
}
const answer = Solution(Input);
console.log(answer);