const luckyNumberEl = document.getElementById("luckyNumber")
const counterButtonEl = document.getElementById("counterButton")
const finalNumberEl = document.getElementById("finalNumber")
const gameStatusEl = document.getElementById("gameStatus")
const nextMissionEl = document.getElementById("nextMission")
let selectedNumber = parseInt(Math.random() * 100)
luckyNumberEl.innerHTML = selectedNumber
let count = 0;
counterButtonEl.addEventListener('click', () => {
    count++
    finalNumberEl.innerHTML = count
    if (count == selectedNumber) {
        gameStatusEl.innerHTML = "عالی. شما برنده شدید"
        counterButtonEl.style.display = 'none'
        luckyNumberEl.style.display = 'none'
        finalNumberEl.style.display = 'none'
        nextMissionEl.style.display = 'inline'
    }
})