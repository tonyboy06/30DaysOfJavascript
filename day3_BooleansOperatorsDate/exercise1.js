let firstName = 'joey'
let lastName = 'cruz'
let country = 'philippines'
let city = 'rizal'
let age = 20
let isMarried = false;

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

console.log(typeof '10' == 10)
console.log(typeof parseFloat('9.8') == typeof 10)

let tr1 = 5 > 4
let tr2 = 'word'.length > 'you'.length
let tr3 = 4 >= 2

console.log(`${tr1}, ${tr2}, ${tr3}`)

let str = ''
let zero = 0
let und

console.log(`${str}, ${zero}, ${und}`)

let fig1 = 4 > 3 //true
let fig2 = 4 >= 3 //true
let fig3 = 4 < 3 //false
let fig4 = 4 <= 3 //false
let fig5 = 4 == 4 //true
let fig6 = 4 === 4 //true
let fig7 = 4 != 4 //false
let fig8 = 4 !== 4 //false
let fig9 = 4 != '4' //true
let fig10 = 4 == '4' //false
let fig11 = 4 === '4' //false
let fig12 = 'python'.length != 'jargon'.length //false

console.log(`${fig1}, ${fig2}, ${fig3}, ${fig4}, ${fig5}, ${fig6}, ${fig7}, ${fig8}, ${fig9}, ${fig10}, ${fig11}, ${fig12}`)

let log1 = 4 > 3 && 10 < 12 //true
let log2 = 4 > 3 && 10 > 12 //false
let log3 = 4 > 3 || 10 < 12 //true
let log4 = 4 > 3 || 10 > 12 //true
let log5 = !(4 > 3) //false
let log6 = !(4 < 3) //true
let log7 = !(false) //true
let log8 = !(4 > 3 && 10 < 12) //false
let log9 = !(4 > 3 && 10 > 12) //true
let log10 = !(4 === '4') //true
let log11 = 'dragon'.includes('on') != 'python'.includes('on') //false

console.log(`${log1}, ${log2}, ${log3}, ${log4}, ${log5}, ${log6}, ${log7}, ${log8}, ${log9}, ${log10}, ${log11}`)

const now = new Date();

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())




