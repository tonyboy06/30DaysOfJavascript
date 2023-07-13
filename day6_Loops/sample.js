let arrCountry = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let arrFull = []
let arrThree = []
let arrLength = []
let arrComplete = []
for (let i = 0; i < arrCountry.length; i++) {
    arrFull.push(arrCountry[i])
    arrThree.push(arrCountry[i].slice(0, 3))
    arrLength.push(arrCountry[i].length)
    arrComplete = `[${arrFull[i]}, ${arrThree[i]}, ${arrLength[i]}]`
    console.log(`${arrComplete}`)
}
console.log(arrComplete.length)