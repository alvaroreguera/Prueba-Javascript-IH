// Rover Object Goes Here
// ======================

// ======================
var roverOne = { 
  direction: "N",
  x: "0",
  y: "0",
  travelLog: ["0"+"0"]
} 

var roverTwo = { 
  direction: "N",
  x: "2",
  y: "4",
  travelLog: ["0"+"0"]
} 

var grid = [
  [null, null, null, "O", null, null, null, null, null, null, null],
  [null, "O", null, "O", null, null, null, null, null, null, null],
  ["O", null, null, null, null, null, "O", null, null, null, null],
  [null, "O", null, null, null, null, null, null, "O", null, null],
  [null, null, null, null, "O", null, null, null, null, null, null],
  [null, null, null, "O", null, null, null, null, null, null, null],
  [null, "O", null, "O", null, null, null, null, null, null, null],
  ["O", null, null, null, null, null, "O", null, null, null, null],
  [null, "O", null, null, null, null, null, null, "O", null, null],
  [null, null, null, null, "O", null, null, null, null, null, null],
  [null, null, null, null, "O", null, null, null, null, null, null],
];


function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
    console.log("Rover is now facing West")
    break;
    case "W":
    console.log("Rover is now facing South")
    break;
    case "E":
    console.log("Rover is now facing North")
    break;
    case "S":
    console.log("Rover is now facing East")
    break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!"); 
  switch (rover.direction) {
    case "N":
    console.log("Rover is now facing East")
    break;
    case "W":
    console.log("Rover is now facing North")
    break;
    case "E":
    console.log("Rover is now facing South")
    break;
    case "S":
    console.log("Rover is now facing West")
    break;
  }
}

function moveForward(rover){
  console.log("moveForward was called"); 
  switch (rover.direction) {
    case "N":
    if (rover.y > 0) { if (grid[rover.x][rover.y] === null) {
    rover.travelLog.push(rover.x + rover.y);
    rover.y--;
    console.log("Rover position: " + rover.x + "," + rover.y)
    } else {
      console.log("There is an obstacle in [" + rover.x + "," + rover.y-- + "]!!")
    }
  } else {
    console.log("STOP, end of grid");
  }

    break;
    case "W":
    rover.travelLog.push(rover.x + rover.y);
    rover.x--
    console.log("Rover position: " + rover.x+"," + rover.y)
    break;
    case "E":
    rover.travelLog.push(rover.x + rover.y);
    rover.x++
    console.log("Rover position: " + rover.x+"," + rover.y)
    break;
    case "S":
    rover.travelLog.push(rover.x + rover.y);
    rover.y++
    console.log("Rover position: " + rover.x+"," + rover.y)
    break;
  }
  
}

function moveBackward(rover)
{
  console.log("moveBackward was called"); 
  switch (rover.direction) {
    case "N":
    if (rover.y === 10) { 
      console.log("STOP, end of grid")}
      else {
    rover.travelLog.push(rover.x + rover.y);
    rover.y++
    console.log("Rover position: " + rover.x+"," + rover.y)
    }
    break;
    case "W":
    rover.travelLog.push(rover.x + rover.y);
    rover.x++
    console.log("Rover position: " + rover.x+"," + rover.y)
    break;
    case "E":
    rover.travelLog.push(rover.x + rover.y);
    rover.x--
    console.log("Rover position: " + rover.x+"," + rover.y)
    break;
    case "S":
    rover.travelLog.push(rover.x + rover.y);
    rover.y--
    console.log("Rover position: " + rover.x+"," + rover.y)
    break;
  }

}

var movementOrder = "fffff";
function move(movementOrder, roverOne) 
{
for (i=0; i < movementOrder.length; i++) 
 {
    if( movementOrder[i] != "f" && movementOrder[i] != "b" && movementOrder[i] != "l" && movementOrder[i] != "r") 
    {
    console.log("Invalid order");
    }
  else 
  {
  if (movementOrder[i] === "f") {moveForward(roverOne);}
  else if (movementOrder[i] === "r") {turnRight(roverOne);}
  else if (movementOrder[i] === "l") {turnLeft(roverOne);}
  else if (movementOrder[i] === "b") {moveBackward(roverOne);}
 }
}
}

var movementOrder = "fffff";
function move(movementOrder, roverTwo) 
{
for (i=0; i < movementOrder.length; i++) 
 {
    if( movementOrder[i] != "f" && movementOrder[i] != "b" && movementOrder[i] != "l" && movementOrder[i] != "r") 
    {
    console.log("Invalid order");
    }
  else 
  {
  if (movementOrder[i] === "f") {moveForward(roverTwo);}
  else if (movementOrder[i] === "r") {turnRight(roverTwo);}
  else if (movementOrder[i] === "l") {turnLeft(roverTwo);}
  else if (movementOrder[i] === "b") {moveBackward(roverTwo);}
 }
}
}