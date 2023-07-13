// The following is an array of 10 students ages:

import countries from "./countries.js"

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


// Sort the array and find the min and max age

let min = ages.sort()[0]
let max = ages.sort()[ages.length - 1]
console.log(`min: ${min} and max: ${max}`)

// Find the median age(one middle item or two middle items divided by two)

let median = ages[Math.floor(ages.length / 2)]
console.log(median)

// Find the average age(all items divided by number of items)

let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i]
}
const average = sum / ages.length
console.log(average)

// Find the range of the ages(max minus min)

let range = max - min
console.log(range)

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array 

let com = Math.round(Math.abs(min - average))
let comp = Math.round(max - average)
console.log(com)
console.log(comp)


// Slice the first ten countries from the countries array

let sliceCountry = countries.slice()
console.log(sliceCountry)

// Find the middle country(ies) in the countries array

let middle = sliceCountry.length / 2
console.log(sliceCountry[5])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

console.log(sliceCountry.slice(0, sliceCountry.indexOf('India')))
console.log(sliceCountry.slice(sliceCountry.indexOf('China') + 1))


