let challenge = '30 days of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(2,21))
console.log(challenge.substr(0,2))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split())
console.log(company.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('30'))
console.log(challenge.lastIndexOf('JavaScript'))
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

let trimmer = ' 30 days of JavaScript'
console.log(trimmer)
console.log(trimmer.trim())

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match('a'))
let congcat = 'is so boring', kongcat = ' so exciting'
console.log(challenge.concat(congcat, kongcat))
console.log(challenge.repeat(2))