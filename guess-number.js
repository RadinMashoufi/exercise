const guessResultEl = document.getElementById("guessResult")
const guessInputEl = document.getElementById("guessInput")
const guessCounterEl = document.getElementById("guessCounter")
const guessButtonEl = document.getElementById("guessButton")
const nextMissionEl = document.getElementById("nextMission")
let randomNumber = parseInt(Math.random() * 100)
console.log(randomNumber)
let count = 0;
guessButtonEl.addEventListener('click', () => {
    count++;
    guessCounterEl.innerHTML = `شما ${count} بار حدس زده اید`
    const guessValue = guessInputEl.value
    if (guessValue < randomNumber) {
        guessResultEl.innerHTML = "عددی که حدس زدید کوچکتر از عدد تصادفی است"
    }
    else
        if (guessValue > randomNumber) {
            guessResultEl.innerHTML = "عددی که حدس زدید بزرگتر از عدد تصادفی است"
        }
        else {
            guessResultEl.innerHTML = "عددی که حدس زده اید درست است"
        }
    if (count > 5) {
        guessCounterEl.innerHTML = "شما بیش از 5 بار حدس زدید و باختید"
        nextMissionEl.style.display = 'none'
        guessResultEl.style.display = 'none'
    }
})