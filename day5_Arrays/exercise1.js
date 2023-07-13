// Declare an empty array;
let str = []

// Declare an array with more than 5 number of elements
let num = [1,2,3,4,5,6,7]

//Declare an array with more than 5 number of elements
console.log(num.length)

// Get the first item, the middle item and the last item of the array
console.log(`${num[0]}, ${num[3]}, ${num[6]}`)

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [4.18, 'mango', 6, 4.4, 'banana', 5]
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'IBM', 'oracle', 'amazon']

console.log(itCompanies)
console.log(itCompanies.length)
console.log(`${itCompanies[0]}, ${itCompanies[3]}, ${itCompanies[7]}`)

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// Change each company name to uppercase one by one and print them out
let com1 = itCompanies[0].toUpperCase()
let com2 = itCompanies[1].toUpperCase()
let com3 = itCompanies[2].toUpperCase()
let com4 = itCompanies[3].toUpperCase()
let com5 = itCompanies[4].toUpperCase()
let com6 = itCompanies[5].toUpperCase()
let com7 = itCompanies[6].toUpperCase()
console.log(com1, com2, com3, com4, com5, com6, com7)

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let str2 = itCompanies.join(', ').toUpperCase()
console.log(`${str2} are big IT companies`)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf('apple')

if (index === -1) console.log(`this company does not exist`)
else console.log(`${itCompanies[index]} company exist`)

// Filter out companies which have more than one 'o' without the filter method
let oo = []
for (let i = 0; i < itCompanies.length; i++) {
    oo.push(itCompanies[i].includes('oo'))
}

console.log(oo)

// Sort the array using sort() method
console.log(itCompanies.sort())

//Reverse the array using reverse() method
// console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
let sliceBeginner = itCompanies.slice(0, 3)
console.log(sliceBeginner)

// Slice out the last 3 companies from the array
let sliceLast = itCompanies.slice(4, itCompanies.length - 0)
console.log(sliceLast)

//Slice out the middle IT company or companies from the array
let sliceMiddle = itCompanies.slice(2, 5)
console.log(sliceMiddle)

//Remove the first IT company from the array
let removeFirst = itCompanies.splice(0, 1)
console.log(removeFirst)

//Remove the middle IT company or companies from the array
let removeMiddle = itCompanies.splice(4, 1)
console.log(removeMiddle)

console.log(itCompanies)

// Remove the last IT company from the array
let removeLast = itCompanies.splice(4, 1)
console.log(removeLast)

console.log(itCompanies)

// Remove all IT companies
let removeAll = itCompanies.splice()
console.log(removeAll)