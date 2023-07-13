// First remove all the punctuations and change the string to array and count the number of words in the array
let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let removeCommas = txt.split(',').join('')
let arr = txt.split(' ')
console.log(arr)
console.log(arr.length)

let characterLength = []

// count every letter in every array of 'arr' array
for (let i = 0; i < arr.length; i++) {
    characterLength.push(arr[i].length)
}

console.log(characterLength)

// In the following shopping cart add, remove, edit items
/*
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' */
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
console.log(shoppingCart)
shoppingCart.splice(4, 1)
console.log(shoppingCart)
shoppingCart.splice(3, 1, 'Green Tea')
console.log(shoppingCart)

import countries from "./countries.js"
import webTech from "./web_tech.js"

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let isEthiopiaExist = countries.indexOf('Ethiopia')
console.log(isEthiopiaExist)
countries.push('ETHIOPIA')
console.log(countries)

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let isSassExis = webTech.indexOf('Sass')
console.log(isSassExis)
webTech.push('Sass')
console.log(webTech)

//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)