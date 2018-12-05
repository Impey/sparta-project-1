const squares = document.getElementsByTagName("td")
let info = document.getElementById('info');
const btnReset = document.getElementById("resetBtn");
const colSelected = document.getElementById("colSelected")
let mouseIsDown = false;
let game = false;
let red = false;
let green = false;
let win = false;
let clicks = []
const winCon = [
  [0, 1, 2, 4, 5, 6, 8, 9, 10], // red win
  [3, 7, 11]// green win 
]

// Start points 
squares[0].addEventListener("mousedown", () => {
  gameStart();
  console.log("Red started")
  red = true;
  green = false;
});
squares[2].addEventListener("click", () => {
  gameStart();
  console.log("Red started")
  red = true;
  green = false;
});


squares[3].addEventListener("click", () => {
  gameStart();
  console.log("Green started")
  green = true;
  red = false;
})
squares[11].addEventListener("click", () => {
  gameStart();
  console.log("Green started")
  green = true;
  red = false;
})

function settingBoard() {

  for (let i = 0; i < squares.length; i++) {
    if (game == true) {
      squares[i].getAttribute("data-num")
      squares[i].setAttribute("class", "");
      squares[i].addEventListener('mousedown', function () { mouseIsDown = true })
      squares[i].addEventListener('mouseup', function () { mouseIsDown = false })
      squares[i].addEventListener('mousemove', function () {

        if (mouseIsDown) {
          onSquareClick(i)
          console.log("Hovering")
        }
      })
    }
  }
}
//Changes the colour of boxs that are hovered over whislt mouse click is down 
function onSquareClick(i) {
  if (green == true) {
    red = false;
    squares[i].setAttribute("class", "X");
    squares[i].style.backgroundColor = "green";
    colSelected.innerHTML = "Green colour selected"

  }
  if (red == true) {
    green = false;
    squares[i].setAttribute("class", "0");
    squares[i].style.backgroundColor = "red";
    colSelected.innerHTML = "Red colour selected"

  }
  WinCondition();


}
// Starts the game state
function gameStart() {
  console.log("gamestarting");
  game = true;
  settingBoard()

}
// Win condition will go here
function WinCondition() {
  for (let i = 0; i < winCon.length; i++) {
    var s1 = winCon[i][0];
    var s2 = winCon[i][1];
    var s3 = winCon[i][2];
    var s4 = winCon[i][3];
    var s5 = winCon[i][4];
    var s6 = winCon[i][5];
    var s7 = winCon[i][6];
    var s8 = winCon[i][7];
    var s9 = winCon[i][8];

    // needs fixing
    if (squares[s1].getAttribute("class") == squares[s2].getAttribute("class") && squares[s2].getAttribute("class") == squares[s3].getAttribute("class")) {
      if (squares[s1].getAttribute("class") == "0") {
        alert("Red win condition");
        resetBoard();
      }
    }
  }
}
//Button to reset the board 
btnReset.addEventListener("click", () => {
  resetBoard();

})

function resetBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[parseInt(i)].setAttribute("class", "clear");
    squares[i].style.backgroundColor = "white";
    colSelected.innerHTML = "";

    mouseIsDown = false;
    game = false;
  }

}


// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
  info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;

}
addEventListener('mousemove', tellPos, false)

















