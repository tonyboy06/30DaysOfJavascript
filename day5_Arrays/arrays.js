let list = ['banana', 'orange', 'apple', 'watermelon']
const lastIndex = list.length - 1

console.log(list[lastIndex])

// let team = ['lakers', 'denver', 'celtics', 'heat']
// let num = prompt(`Enter the number of your favorite team.\n1. ${team[0]}\n2. ${team[1]}\n3. ${team[2]}\n 4. ${team[3]}`)
// let alerts = alert(`your favorite team is ${team[num]}`)
// console.log(alerts)

const numbers = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items