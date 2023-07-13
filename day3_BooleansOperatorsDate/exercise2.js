// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter the base')
let height = prompt('Enter the height')
let area = 0.5 * base * height
let alert1 = alert(`The area of the triangle is ${area}`)
console.log(alert1)

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt('Enter side a')
let sideB = prompt('Enter side b')
let sideC = prompt('Enter side c')
let perimeter = sideA + sideB + sideC
let alert2 = alert(`The perimeter of the triangle is: ${perimeter}`)
console.log(alert2)

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter length')
let width = prompt('Enter width')
let area2 = length * width
let perimeter2 = 2 * (length + width)
let alert3 = alert(`the area of rectangle is ${area2} and the perimeter of rectangle is ${perimeter2}`)

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14
let radius = prompt('Enter radius')
let areaCircle = PI * radius * radius
let circumference = 2 * PI * radius
let alert4 = alert(`The area of a circle is ${areaCircle} and the circumference of a circle is ${circumference}`)

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hour = prompt('Enter hours: ')
const ratePerHour = prompt('Enter rate per hour: ', '$')
let weeklyEarning = hour * ratePerHour
let alert5 = alert(`Your weekly earning is: $${weeklyEarning}`)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = 'joey'
if (name > 7) alert('your name is long')
else alert('your name is short')

// Compare your first name length and your family name length and you should get this output.
let firstName = 'joey boy'
let lastName = 'cruz'
console.log(`your first name ${firstName} is longer than your family name, ${lastName}`)

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
let subtract = myAge - yourAge
console.log(`I am ${subtract} older than you`)

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let now = new Date()
let birthYear = prompt('Enter your Birth Year:')
let minusYear = now.getFullYear() - birthYear
if (minusYear >= 18) alert(`You are ${minusYear}, Your are old enough to drive`)
else alert(`Your are ${minusYear}, you will be allowed to drive after ${18 - minusYear}, years`)

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let numYearsLive = prompt('Enter the number of years you live')
let secondInYear = 365 * 24 * 60 * 60
let youHaveLive = alert(`you have lived: ${secondInYear} seconds`)


/*Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */
let year = now.getFullYear()
let month = now.getMonth()
let day = now.getDate()
let hour2 = now.getHours()
let minutes = now.getMinutes()

console.log(`${year}-${month}-${day} ${hour2}:${minutes}`)
console.log(`${day}-${month}-${year} ${hour2}:${minutes}`)
console.log(`${day}/${month}/${year} ${hour2}:${minutes}`)
