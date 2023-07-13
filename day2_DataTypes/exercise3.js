let str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(str.length)

let str2 = 'You cannot end a sentence with because because because is a conjunction'
let regex = /because/g
let count = str2.match(regex)
console.log(count)

const sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let regEx = /\d+/g
let num = sentence.match(regEx)

let totalIncome = 0
for (let number of num) {
    totalIncome += parseInt(number)
}
console.log(totalIncome)
