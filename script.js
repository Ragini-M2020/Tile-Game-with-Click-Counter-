//console.log('hello')

//let titleDiv = document.getElementById('title')

//console.log('before: ', titleDiv.innerText)

//let message = 'Square Color Counter 🚀'    //DOM   MANUPULATION 

////titleDiv.innerText = message;

//console.log('after: ', titleDiv.innerText)

//titleDiv.innerHTML = `<p>${message}</p>`

//titleDiv.style.backgroundColor = 'blue'

const squares = document.querySelectorAll('.colorSquare')  //querySelector allows you to efficiently manipulate and work with elements on your webpage using JavaScript. Additionally, there is a related method called querySelectorAll, 
//which returns a collection of all elements that match the specified selector instead of just the first one.

// forEach
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0} //creating objects 
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1    //weget the value when we click sq. let red value we get then it goes to red key pair and also add 
    // + 1 by the times we clicked on the square ...red ==>0 +1==1 again sq. clicked ...=>+1 =2
    square.innerText = timesClicked[square.value] //for printinf no. times on the squares .ussing inner text
  }
})
function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''  // TO EMPTY THE VALUES SHOWING IN THE TILES OR CAN B E SET TO ZEO VALUE
  })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()

