// Rover Object Goes Here
// ======================
const rover = {
  Default: "N",
  currentDirection: "N",
  x: 0,
  y: 0,
  travelLog:[{x:0,y:0}],
  previousCommand: "none",
  nextCommand:"none"
  
}

//function commandT (rover,turnCommand){
 
//}


// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  
  switch (rover.currentDirection){
    case "N":
      rover.currentDirection = "W";
      break;
    case "S":
      rover.currentDirection = "E";
      break;
    case "E":
      rover.currentDirection = "N";
      break;
    case "W":
      rover.currentDirection = "S";
      break;
  }
  rover.previousCommand = rover.nextCommand
  rover.nextCommand = "turnLeft"
  console.log(rover.currentDirection)
}

function turnRight(rover){
  console.log("turnRight was called!");
switch (rover.currentDirection){
    case "N":
      rover.currentDirection = "E";
      break;
    case "S":
      rover.currentDirection = "W";
      break;
    case "E":
      rover.currentDirection = "S";
      break;
    case "W":
      rover.currentDirection = "N";
      break;
  }
  
  rover.previousCommand = rover.nextCommand
  rover.nextCommand = "turnRight"
  console.log(rover.currentDirection)
}

function moveForward(rover){
  console.log("moveForward was called")
    
  switch (rover.currentDirection){
      case "N":
        if (rover.y === 0){
          console.log("Can't move off the board")
        } else {
        rover.y = rover.y - 1;
        }
          break;
      case "S":
          if (rover.y===9){
          console.log("Can't move off the board")
        } else{
        rover.y = rover.y + 1;
        }
        break;
      case "E":
          if (rover.x===9){
          console.log("Can't move off the board")
        } else{
        rover.x = rover.x + 1;
        }
        break;
      case "W":
          if (rover.x===0){
          console.log("Can't move off the board")
        } else{
        rover.x = rover.x - 1;
        }
        break;
    }
     console.log(`Player has position: x=${rover.x}, y=${rover.y}`);
      
      let newPosition = {x: rover.x, y: rover.y};
      rover.travelLog.push(newPosition)

}

function moveBackward(rover){
  console.log("moveBackward was called")
    
  switch (rover.currentDirection){
      case "N":
        if (rover.y === 9){
          console.log("Can't move off the board")
        } else {
        rover.y = rover.y + 1;
        }
          break;
      case "S":
          if (rover.y===0){
          console.log("Can't move off the board")
        } else{
        rover.y = rover.y - 1;
        }
        break;
      case "E":
          if (rover.x===0){
          console.log("Can't move off the board")
        } else{
        rover.x = rover.x - 1;
        }
        break;
      case "W":
          if (rover.x===9){
          console.log("Can't move off the board")
        } else{
        rover.x = rover.x + 1;
        }
        break;
    }
     console.log(`Player has position: x=${rover.x}, y=${rover.y}`);
      
      let newPosition = {x: rover.x, y: rover.y};
      rover.travelLog.push(newPosition)

}

function command(rover, orders){
 
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "l": // left
        turnLeft(rover);
        break;
      case "r": // right
        turnRight(rover);
        break;  
      case "f": // forward
        moveForward(rover);
        break; 
      case "b": // backward
        moveBackward(rover);
        break; 
      default:
        console.log("Please use 'l', 'r', 'f', or 'b' commands only!")
      }
  }
  console.log(rover.travelLog);
}
command (rover,"frfxx")
