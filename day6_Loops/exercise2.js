// Develop a small script which generate any number of characters random id:
let char = '1234567890qwertyuiopasdfghjklzxcvbnm'
let num = Math.floor(Math.random() * 20)
let randomChar = ''
for (let i = 0; i < num; i++) {
    let random = Math.floor(Math.random() * char.length)
    randomChar += char[random]
}
console.log(randomChar)


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

let arrLand = []
for(let i = 0; i < arrCountry.length; i++) {
    arrLand.push(arrCountry[i].toLowerCase().includes('land'))
}
let arrLandExist = arrLand.slice(1, arrLand.includes('land'))
console.log(arrLandExist)


