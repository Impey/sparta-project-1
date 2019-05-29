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
let green = false;
let yellow = false;
let lightBlue = false;
let red = false;
let blue = false;
let orange = false;

//*****************************************************//
// MODIFIED TO ADD EXPECTED COLOUR AS STARTING ELEMENT 
// NOTE MUST MATCH CLASS IN CSS FILE //
//****************************************************//
const winCon = [
  ["green", 6, 12, 18],// green win 
  ["yellow", 7, 13, 19, 25, 31],// yellow win
  ["lightblue", 8], //Light blue win
  ["red", 21, 15, 9, 3], //Red win
  ["orange", 27, 28, 22, 16],// oragne win 
  ["blue", 11, 17, 23, 29, 35, 34, 33]//blue win
]

const startPoints = [
  ["green", 0, 24],
  ["yellow", 1, 30],
  ["lightblue", 2, 14],
  ["red", 4, 20],
  ["orange", 10, 26],
  ["blue", 5, 32]
]
gameStart();
nextLevelChecker();

function test(){
  for(let i=0; i < squares.length; i++){
  squares[i].addEventListener("click",() =>{
   if(squares[i].getAttribute("class")== "startClassgreen"){
     green = true;
     yellow = false;
     lightBlue = false;
     red = false;
     oragne = false;
     blue = false;
    }
    if(squares[i].getAttribute("class")== "startClassyellow"){
      green = false;
      yellow = true;
      lightBlue = false;
      red = false;
      oragne = false;
      blue = false;
     }
     if(squares[i].getAttribute("class")== "startClasslightblue"){
      green = false;
      yellow = false;
      lightBlue = true;
      red = false;
      oragne = false;
      blue = false;
     }
     if(squares[i].getAttribute("class")== "startClassred"){
      green = false;
      yellow = false;
      lightBlue = false;
      red = true;
      oragne = false;
      blue = false;
     }
     if(squares[i].getAttribute("class")== "startClassblue"){
      green = false;
      yellow = false;
      lightBlue = false;
      red = false;
      oragne = false;
      blue = true;
     }
     if(squares[i].getAttribute("class")== "startClassorange"){
      orange = true;
      red = false;
      lightBlue = false;
      yellow = false;
      green = false;
      blue = false;
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
          test()
          onSquareClick(i)
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

  if (lightBlue == true) {
    squares[i].setAttribute("class", "lightblue");
    squares[i].style.backgroundColor = "lightblue";
    
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
    squares[startPoints[i][j]].setAttribute("class","startClass"+startPointColor)
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

function resetBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[parseInt(i)].setAttribute("class", "clear");
    squares[i].style.backgroundColor = "white";
    colSelected.innerHTML = "";
    mouseIsDown = false;
    game = false;
    win = false;
  }
}
