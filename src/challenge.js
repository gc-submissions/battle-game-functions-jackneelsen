const getGrade = function(number) {
    return number >= 100 ? "Error: Upper Bound":
    number >= 90 ? "A":
    number >= 80 ? "B":
    number >= 70 ? "C":
    number >= 60 ? "D":
    number >= 0 ? "F":
    "Error: Lower Bound";
}

let gradeJack = getGrade(101)
let gradeJackson = getGrade(91)
let gradeJackie = getGrade(81)
let gradeJacko = getGrade(71)
let gradeJacky = getGrade(61)
let gradeJacc = getGrade(51)
let gradeJaccs = getGrade(-51)

console.log(gradeJack)
console.log(gradeJackson)
console.log(gradeJackie)
console.log(gradeJacko)
console.log(gradeJacky)
console.log(gradeJacc)
console.log(gradeJaccs)

const prioritize = function(urgent, important) {
    return urgent && important ? 1:
    !urgent && important ? 2:
    urgent && !important ? 3:
    4;
}

let cleanRoom = prioritize(true, true)
let cleanRoom2 = prioritize(true, false)
let cleanRoom3 = prioritize(false, true)
let cleanRoom4 = prioritize(false, false)
console.log(cleanRoom)
console.log(cleanRoom2)
console.log(cleanRoom3)
console.log(cleanRoom4)


const calculatePay = function(wage, hours) {
    return hours > 40 ? (wage * 40) + 1.5 * wage * (hours - 40):
    wage * hours;
}

let longWeek = calculatePay(30, 60)
let shortWeek = calculatePay(30, 40)
console.log(longWeek)
console.log(shortWeek)


