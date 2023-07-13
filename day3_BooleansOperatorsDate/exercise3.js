let year = (now.getFullYear().toString().padStart(2, '0'))
let month = (now.getMonth().toString().padStart(2, '0'))
let day = (now.getDate().toString().padStart(2, '0'))
let hour2 = (now.getHours().toString().padStart(2, '0'))
let minutes = (now.getMinutes().toString().padStart(2, '0'))

console.log(`${year}-${month}-${day} ${hour2}:${minutes}`)