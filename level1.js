const squares = document.getElementsByTagName("td")
let info = document.getElementById('info');
const btnReset = document.getElementById("resetBtn");
const btnCheck = document.getElementById("checkBtn");
const colSelected = document.getElementById("win")
const nextBtn = document.getElementById("nextBtn");
let mouseIsDown = false;
let game = false;
let win = false;

//color Booleans values
let green;
let yellow;
let purple;
let red;
let blue;
let orange;

//*****************************************************//
// MODIFIED TO ADD EXPECTED COLOUR AS STARTING ELEMENT 
// NOTE MUST MATCH CLASS IN CSS FILE //
//****************************************************//
const winCon = [
  ["green", 6, 12, 18],// green win 
  ["yellow", 7, 13, 19, 25, 31],// yellow win
  ["purple", 8], //Light blue win
  ["red", 21, 15, 9, 3], //Red win
  ["orange", 27, 28, 22, 16],// oragne win 
  ["blue", 11, 17, 23, 29, 35, 34, 33]//blue win
]

const startPoints = [
  ["green", 0, 24],
  ["yellow", 1, 30],
  ["purple", 2, 14],
  ["red", 4, 20],
  ["orange", 10, 26],
  ["blue", 5, 32]
]
gameStart();
nextLevelChecker();

function colourSelector(){
  for(let i=0; i < squares.length; i++){
  squares[i].addEventListener("click",() =>{
   if(squares[i].getAttribute("class")== "startClassgreen"){
     green = true;
     yellow = false;
     purple = false;
     red = false;
     blue = false;
     orange = false;
    }
    if(squares[i].getAttribute("class")== "startClassyellow"){
      green = false;
      yellow = true;
      purple = false;
      red = false;
      blue = false;
      orange = false;
      
     }
     if(squares[i].getAttribute("class") ==  "startClasspurple"){
      green = false;
      yellow = false;
      purple = true;
      red = false;
      blue = false;
      orange = false;
     }
  
     if(squares[i].getAttribute("class")== "startClassred"){
      green = false;
      yellow = false;
      purple = false;
      red = true;
      blue = false;
      orange = false;
     }
     if(squares[i].getAttribute("class")== "startClassblue"){
      green = false;
      yellow = false;
      purple = false;
      red = false;
      blue = true;
      orange = false;
     }
     if(squares[i].getAttribute("class")== "startClassorange"){
      green = false;
      yellow = false;
      purple = false;
      red = false;
      blue = false;
      orange = true;
     }
    }
  )}
}

function settingBoard() {
  for (let i = 0; i < squares.length; i++) {
    if (game == true) {
      squares[i].getAttribute("data-num")
      squares[i].addEventListener('mousedown', function () { mouseIsDown = true })
      squares[i].addEventListener('mouseup', function () { mouseIsDown = false })
      squares[i].addEventListener('mousemove', function () {
        if (squares[i].getAttribute("class").includes("startClass")) {
           WinCondition();
          }
        else if (mouseIsDown) {
          onSquareClick(i)
          colourSelector()
        }
      })
    }
  }
}
//Changes the colour of boxs that are hovered over whislt mouse click is down 
function onSquareClick(i) {
 if (green == true) {
    squares[i].setAttribute("class", "green");
    squares[i].style.backgroundColor = "green";
    }

  if (yellow == true) {
    squares[i].setAttribute("class", "yellow");
    squares[i].style.backgroundColor = "yellow";
    }
  
  if (purple == true) {
    squares[i].setAttribute("class", "purple");
    squares[i].style.backgroundColor = "purple";
    }

  if (red == true) {
    squares[i].setAttribute("class", "red");
    squares[i].style.backgroundColor = "red";
  }

  if (orange == true) {
    squares[i].setAttribute("class", "orange");
    squares[i].style.backgroundColor = "orange";
  }

  if (blue == true) {
    squares[i].setAttribute("class", "blue");
    squares[i].style.backgroundColor = "blue";
   }
}

// Starts the game state
function gameStart() {
 game = true;
 settingBoard()
 for(let i = 0; i < startPoints.length; i++){
   for(let j = 1; j < startPoints[i].length; j++){
    let startPointColor = startPoints[i][0];
    squares[startPoints[i][j]].style.background = startPointColor;
    squares[startPoints[i][j]].setAttribute("class","startClass" + startPointColor)
   }
 }
}

//****************************************************//
// NEW WIN CONDITION MUCH MORE STREAMLINED
// WILL WORK WITH NEW COLOURS AS LONG AS THE CLASSES ARE CORRECTLY DEFINED
//****************************************************//
function WinCondition() {
  for (let i = 0; i < winCon.length; i++) { //Iterate through colours
   for (let j = 1; j < winCon[i].length; j++) { //Iterate through squares that make up colour, starting at element 1 as element 0 is the colour
    let winConColour = winCon[i][0]; //Get the first element, the name of the class we expect.
    // console.log(winConColour);
      if (squares[winCon[i][j]].getAttribute("class") !== winConColour) { //Check the squares class is the class written at the start.
         win = false;
         console.log(win)
         return;
      }
    }
  }
  win = true;
  nextBtn.style.visibility ='visible'
  return;
}

function nextLevelChecker(){
 if(!win === true){
   nextBtn.style.visibility ='hidden'
 }
}

//Button to reset the board 
btnReset.addEventListener("click", () => {
  location.reload();
})

