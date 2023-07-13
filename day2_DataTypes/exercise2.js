console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

console.log(typeof '10' === typeof '10')

let par = parseFloat(9.8)
let ceil = Math.ceil(par)
console.log(ceil === 10)

console.log('python'.includes('on'))
console.log('jargon'.includes('on'))

let sentence1 = 'I hope this course is not full of jargon'
console.log(sentence1.includes('jargon'))

let randomNum = Math.random() // random number

let numBtnZeroToHundred = Math.round(randomNum * 101)
console.log(numBtnZeroToHundred)

let numBtnFiftyToHundred = Math.round(randomNum * 51) + 50
console.log(numBtnFiftyToHundred)

let numBtnZeroToTwoFiveFive = Math.round(randomNum * 256)
console.log(numBtnZeroToTwoFiveFive)

let str = 'JavaScript'
let randomIndex = Math.floor(Math.random() * str.length)
let randomChar = str.charAt(randomIndex)
console.log(randomChar)

let escape = '1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t21\n'
console.log(escape)

let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.substring(31,55))


