/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
let grade = 67

if (grade <= 100 && grade >= 90) console.log('A')
else if (grade <= 89 && grade >= 70) console.log('B')
else if (grade <= 69 && grade >= 60) console.log('C')
else if (grade <= 59 && grade >= 50) console.log('D')
else if (grade <= 49 && grade >= 0) console.log('F')
else console.log('Invalid input')

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */
let userInput = 'july'
let season = userInput.toLowerCase()

if (season == 'september' || season == 'october' || season == 'november') console.log(`The season is Autumn`)
else if (season == 'december' || season == 'january' || season == 'february') console.log('The season is Winter')
else if (season == 'march' || season == 'april' || season == 'may') console.log(`The season is Spring`)
else if (season == 'june' || season == 'july' || season == 'august') console.log(`The season is Summer`)
else console.log(`Invalid input!`)

//Check if a day is weekend day or a working day. Your script will take day as an input.
let userInputTwo = 'monday'
let day = userInputTwo.toLowerCase()

switch(day) {
    case 'sunday':
        console.log(`${day} is weekends`)
        break
    case 'monday':
        console.log(`${day} is weekdays`)
        break
    case 'tuesday':
        console.log(`${day} is weekdays`)
        break
    case 'wednesday':
        console.log(`${day} is weekdays`)
        break
    case 'thursday':
        console.log(`${day} is weekdays`)
        break
    case 'friday':
        console.log(`${day} is weekdays`)
        break
    case 'saturday':
        console.log(`${day} is weekends`)
        break
    default:
        console.log(`Invalid input`)
}
