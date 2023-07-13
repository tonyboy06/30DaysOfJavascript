// Write a program which tells the number of days in a month.

let userInput = 'october'
let month = userInput.toLowerCase()

switch(month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${userInput} has 31 days`)
        break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${userInput} has 30 days`)
    case 'february':
        console.log(`${userInput} has 28 days`)
        break
    default:
        console.log(`Invalid input`)
}