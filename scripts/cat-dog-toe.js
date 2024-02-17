console.log('Welcome to Tic-Tac-Toe! Enjoy!')
let cells = document.getElementsByTagName('TD')
let subtitle = document.getElementById('subtitle')

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

// randomise who starts
let randomNumber = Math.round(Math.random() * 1)
if (randomNumber === 0) {
  dogsTurn = true
  subtitle.innerHTML = "It's Cat's turn to start"
} else {
  dogsTurn = false
  subtitle.innerHTML = "It's Dog's turn to start"
}

let gameIsOver = false

//adds images hidden in html to repplace "o" and "x" symbols
let cat = document.getElementById('cat')
let dog = document.getElementById('dog')

//add symbols on click
function cellClicked(e) {
  let cell = e.target
  if (gameIsOver) return
  if (cell.innerHTML === '') {
    dogsTurn
  }
  if (cell.innerHTML !== '') {
    return
  }
  if (dogsTurn === true) {
    subtitle.innerText = "Dog's turn"
    cell.innerHTML = `<img src="${cat.src}" alt="Cat">`
    playCatAudio()
  } else {
    cell.innerHTML = `<img src="${dog.src}" alt="Dog">`
    subtitle.innerText = "Cat's turn"
    playDogAudio()
  }
  dogsTurn = !dogsTurn
  checkForWin(`<img src="${cat.src}" alt="Cat">`)
  checkForWin(`<img src="${dog.src}" alt="Dog">`)
  checkForDraw()
  onGameEnd()
}

//Check for win
function checkForWin(symbol) {
  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true

  if (gameIsOver) {
    if (dogsTurn) {
      subtitle.innerHTML = `Game over: Dog won`
    } else {
      subtitle.innerHTML = `Game over: Cat won`
    }
  }
}

if (gameIsOver && subtitle.innerHTML !== `Game over: Dog won`) {
  subtitle.innerHTML = 'Draw'
}

if (gameIsOver && subtitle.innerHTML !== `Game over: cat won`) {
  subtitle.innerHTML = 'Draw'
}

function checkForDraw() {
  let filledCells = 0
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML.includes('img')) {
      filledCells++
      if (filledCells === cells.length && !gameIsOver) {
        gameIsOver = true
        subtitle.innerHTML = 'Game is a Stalemate'
      }
    }
  }
}

// restart the game
// if game is over
//   unhide from from within html, a button that says play again?
//     reset the board when the buttons clicked

const newButton = document.createElement('button')

//resets the game
function onGameEnd() {
  if (gameIsOver) {
    newButton.textContent = 'Play again!'
    let buttonDiv = document.getElementById('button')
    buttonDiv.appendChild(newButton)
    // document.body.appendChild(newButton)
    playChickenAudio()
  }
}

newButton.addEventListener('click', () => {
  for (let i = 0; i < cells.length; i++) {
    gameIsOver = false
    cells[i].innerHTML = ''
    if (dogsTurn) {
      subtitle.innerHTML = `Its cats turn to start`
    } else {
      subtitle.innerHTML = `Its dogs turn to start`
    }
  }
})

//sound effects

function playCatAudio() {
  let audioElementCat = document.getElementById('cat-audio')
  audioElementCat.play()
}

function playDogAudio() {
  let audioElementDog = document.getElementById('dog-audio')
  audioElementDog.play()
}

function playChickenAudio() {
  let audioElementChicken = document.getElementById('chicken-audio')
  audioElementChicken.play()
}

//Keep track of who has won
// initialise count for each player to be 0
// at end of game - update count of winner by 1
// update html with new number

function updateTally() {
  if (gameIsOver) {
  }
}
