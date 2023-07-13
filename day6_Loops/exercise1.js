// Iterate 0 to 10 using for loop, do the same using while and do while loop
const num = []
for (let i = 0; i < 11; i++) {
    num.push(i)
}
console.log(num)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
let num2 = []
for (let i = 10; i > -1; i--) {
    num2.push(i)
}
console.log(num2)

/**Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */

let str = ''
for (let i = 1; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        str += '*'
    }
    str += '\n'
}
console.log(str)

// 
/**Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */
for (let i = 0; i < 11; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

/**Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */

for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

// Use for loop to iterate from 0 to 100 and print only even numbers
let arr = []
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        arr.push(i)
    }
}
console.log(arr)

//Use for loop to iterate from 0 to 100 and print only odd numbers
let arrTwo = []
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        arrTwo.push(i)
    }
}
console.log(arrTwo)

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let num3 = 0
for(let i = 0; i <= 100; i++) {
    num3 += i
}
console.log(`The sum of all numbers from 0 to 100 is ${num3}`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even = 0
let odd = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) even += i
    else if (i % 2 == 1) odd += i
}
console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let eveOddArr = [0, 0]
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) eveOddArr[0] += i
    else if (i % 2 == 1) eveOddArr[1] += i
}
console.log(eveOddArr)

// Develop a small script which generate array of 5 random numbers
let randomArr = [];
for (let i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 10));
}
console.log(randomArr)

//generating random unique arr
let randomUniqeArr = []
for (let i = 5; randomUniqeArr.length < i;) {
    let random = Math.floor(Math.random() * 10)
    if (randomUniqeArr.indexOf(random) === -1) {
        randomUniqeArr.push(random)
    }
}
console.log(randomUniqeArr)

// Develop a small script which generate a six characters random id:
let characters = '1234567890qwertyuiopasdfghjklzxcvbnm'
let randomChar = ''
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * characters.length)
    randomChar += characters[random]
}
console.log(randomChar)





