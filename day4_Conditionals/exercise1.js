// Let user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt('Enter your age')

if (age >= 18) alert('You are older enough to drive')
else alert(`You are left with ${18 - age} years to drive`)

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = prompt('Enter my age')
let yourAge = prompt('Enter your age')
let ageGap = Math.abs(myAge - yourAge)
if (myAge > yourAge) alert(`I  am ${ageGap} years older than you.`)
else alert(`You are ${ageGap} years older than me`)

/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

- using if else
- ternary operator. */
let a = 4
let b = 3

if (a > b) console.log(`${a} is greater than ${b}`)
else console.log(`${b} is greater than ${a}`)

a > b 
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${b} is greater than ${a}`)

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num1 = prompt('Enter a number')

if (num1 % 2 == 0) alert(`${num1} is even number`)
else alert(`${num1} is odd number`)

