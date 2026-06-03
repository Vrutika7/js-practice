const input = {
    '1': ["tvs", "laptops", "mobiles"],
    '5': ["radio", "mouse", "monitor"],
}
// output =
// [
//     {parentid:1, id:1, name:"tvs"},
//     {parentid:1, id:2, name:"laptops"},
//     {parentid:1, id:3, name:"mobiles"},
//     {parentid:5, id:4, name:"radio"},
//     {parentid:5, id:5, name:"mouse"},
//     {parentid:5, id:6, name:"monitor"},
// ]

let result = [];
let index = 1;
for (const key in input) {
    //   console.log(key);
    //   let answer = [];

    let childArr = input[key];
    for (let i = 0; i < childArr.length; i++) {
        //   console.log(childArr[index]);
        let elName = childArr[i];

        result.push({
            parentId: key,
            id: index++,
            name: elName
        })
    }

}
console.log(result)