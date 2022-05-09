//document.getElementById("count-el").innerText = 5

//let count = 0

//consolo.log(count)

// let fist = 44
// let second = 6

// let count = first + second

// console.log(count)

// let myAge = 10
// let humanDogRatio = 70

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)



 // Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50

//  bonusPoints += 50
 
//  bonusPoints -= 75
 
//  bonusPoints += 45
 
//  console.log(bonusPoints)

// function increment() {
// 	consolo.log("The click button")
// }

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapTime(){
// 	let totalTime = lap1 + lap2 + lap3
// 	console.log(totalTime)
// }
// totalTime()

// lapsCompleted = 0

// function incrementLap(){
// 	lapsCompleted += 1
// }
// lapsCompleted()
// lapsCompleted()
// lapsCompleted()

// console.log(lapsCompleted)

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "Per Harald Borgen"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + 


// let countEl = document.getElementById('count-el')
// let count = 0

// function increment() {
// 	count += 1
// 	countEl.innerText = count 

// }

// function save() {
// 	console.log(count)
// }
// save()


// let welcomeEl = document.getElementById("count-el")
// let name = "Salman"
// let greeting = "Welcome to my website."
// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += "👋"



// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEL)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
	let count_save = count + " - "
    saveEL.textContent += count_save
    count = 0
    countEl.textContent = 0
    
    console.log(count)
}



