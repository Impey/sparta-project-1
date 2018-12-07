const squares = document.getElementsByTagName("td")
let info = document.getElementById('info');
const btnReset = document.getElementById("resetBtn");
const btnCheck = document.getElementById("checkBtn");
const colSelected = document.getElementById("colSelected")
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
let startPoint = false;
//*****************************************************//
// MODIFIED TO ADD EXPECTED COLOUR AS STARTING ELEMENT 
// NOTE MUST MATCH CLASS IN CSS FILE //
//****************************************************//
const winCon = [
  ["green", 31],// green win 
  ["yellow", 33],// yellow win
  ["lightblue", 41, 34, 27, 26], //Light blue win
  ["red", 20, 19, 18, 17, 16, 23, 22, 29, 36, 37, 38], //Red win
  ["orange", 11, 10, 9, 8],// oragne win 
  ["blue", 5, 4, 3, 2, 1, 0, 7, 14, 21, 28, 35, 42, 43, 44, 45, 46]//blue win
]
gameStart();
// Green Start points
squares[24].addEventListener("mousedown", () => {
  console.log("Green")
  green = true;
  yellow = false;
  lightBlue = false;
  red = false;
  orange = false;
  blue = false;
});
squares[30].addEventListener("click", () => {
  console.log("Green")
  green = true;
  yellow = false;
  lightBlue = false;
  red = false;
  orange = false;
  blue = false;
});
//Yellow start points/////////////////////////////
squares[32].addEventListener("mousedown", () => {//
  console.log("yellow")
  yellow = true;
  green = false;
  lightBlue = false;
  red = false;
  oragne = false;
  blue = false;
});

squares[40].addEventListener("click", () => {
  console.log("yellow")
  yellow = true;
  green = false;
  lightBlue = false;
  red = false;
  oragne = false;
  blue = false;
});
//Light Blue start points
squares[25].addEventListener("click", () => {
  console.log("light blue")

  lightBlue = true;
  yellow = false;
  green = false;
  red = false;
  blue = false;
});
squares[48].addEventListener("click", () => {
  console.log("light bue")
  lightBlue = true;
  yellow = false;
  green = false;
  red = false;
  blue = false;
});
//Red Start points
squares[13].addEventListener("click", () => {
  console.log("red")
  red = true;
  lightBlue = false;
  yellow = false;
  green = false;
  blue = false;
  orange = false;
});
squares[39].addEventListener("click", () => {
  console.log("red")
  red = true;
  lightBlue = false;
  yellow = false;
  green = false;
  blue = false;
  orange = false;
});
//orange start points
squares[12].addEventListener("click", () => {
  console.log("orange")
  orange = true;
  red = false;
  lightBlue = false;
  yellow = false;
  green = false;
  blue = false;
});
squares[15].addEventListener("click", () => {
  console.log("orange")
  orange = true;
  red = false;
  lightBlue = false;
  yellow = false;
  green = false;
  blue = false;
});
//blue start points
squares[6].addEventListener("click", () => {
  console.log("blue")
  blue = true;
  orange = false;
  red = false;
  lightBlue = false;
  yellow = false;
  green = false;
});
squares[47].addEventListener("click", () => {
  console.log("blue")
  blue = true;
  orange = false;
  red = false;
  lightBlue = false;
  yellow = false;
  green = false;
});


//Handles the on Mouse down click drawing

function settingBoard() {
  for (let i = 0; i < squares.length; i++) {
    if (game == true) {
      squares[i].getAttribute("data-num")
      //squares[i].setAttribute("class", "");
      squares[i].addEventListener('mousedown', function () { mouseIsDown = true })
      squares[i].addEventListener('mouseup', function () { mouseIsDown = false })
      squares[i].addEventListener('mousemove', function () {
        if (squares[i].getAttribute("class") === "startClass") {
          console.log("dont draw")
        }
        else if (mouseIsDown) {
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
    colSelected.innerHTML = "Green colour selected"
  }
  if (yellow == true) {

    squares[i].setAttribute("class", "yellow");
    squares[i].style.backgroundColor = "yellow";
    colSelected.innerHTML = "Yellow Selected"
  }

  if (lightBlue == true) {
    squares[i].setAttribute("class", "lightblue");
    squares[i].style.backgroundColor = "lightblue";
    colSelected.innerHTML = "Light Blue selected"
  }
  if (red == true) {
    squares[i].setAttribute("class", "red");
    squares[i].style.backgroundColor = "red";
    colSelected.innerHTML = "Red selected"

  }
  if (orange == true) {
    squares[i].setAttribute("class", "orange");
    squares[i].style.backgroundColor = "orange";
    colSelected.innerHTML = "orange Selected"
  }
  if (blue == true) {
    squares[i].setAttribute("class", "blue");
    squares[i].style.backgroundColor = "blue";
    colSelected.innerHTML = "Blue selected"
  }
}
// Starts the game state
function gameStart() {
  //start points for green
  squares[24].style.background = "green";
  squares[30].style.background = "green"
  squares[24].setAttribute("class", "startClass");
  squares[30].setAttribute("class", "startClass");
  //start points for Yellow
  squares[32].style.background = "yellow"
  squares[40].style.background = "yellow"
  squares[32].setAttribute("class", "startClass");
  squares[40].setAttribute("class", "startClass");
  // start points for  light blue
  squares[25].style.background = "lightblue"
  squares[48].style.background = "lightblue"
  squares[25].setAttribute("class", "startClass");
  squares[48].setAttribute("class", "startClass");
  //start points for red
  squares[13].style.background = "red"
  squares[39].style.background = "red"
  squares[13].setAttribute("class", "startClass");
  squares[39].setAttribute("class", "startClass");
  // start points for orange
  squares[12].style.background = "orange"
  squares[15].style.background = "orange"
  squares[12].setAttribute("class", "startClass");
  squares[15].setAttribute("class", "startClass");
  // start point for blue
  squares[6].style.background = "blue"
  squares[47].style.background = "blue"
  squares[6].setAttribute("class", "startClass");
  squares[47].setAttribute("class", "startClass");
  game = true;
  settingBoard()
}

//Button to check if player input is correct
btnCheck.addEventListener("click", () => {
  WinCondition();
})

//****************************************************//
// NEW WIN CONDITION MUCH MORE STREAMLINED
// WILL WORK WITH NEW COLOURS AS LONG AS THE CLASSES ARE CORRECTLY DEFINED
//****************************************************//
function WinCondition() {
  for (let i = 0; i < winCon.length; i++) { //Iterate through colours
    for (let j = 1; j < winCon[i].length; j++) { //Iterate through squares that make up colour, starting at element 1 as element 0 is the colour
      let winConColour = winCon[i][0]; //Get the first element, the name of the class we expect.
      if (squares[winCon[i][j]].getAttribute("class") !== winConColour) { //Check the squares class is the class written at the start.
        alert("incorrect tile expected: " + winConColour + " Got: " + squares[winCon[i][j]].getAttribute("class")); //if not vomit an error and break.
        return;
      }
    }
  }
  alert("Good Job"); //If completes with no error, reward!
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
  }

}
// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
  info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;

}
addEventListener('mousemove', tellPos, false)







