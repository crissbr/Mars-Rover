var rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: [0,0]
  };
  
  
  var grid = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ]
  
  function turnLeft (rover) {
      
      switch (rover.direction) {
          case 'N':
              rover.direction = 'W';
              console.log('turnLeft was called!');
              console.log(rover.direction);
              break;
  
          case 'W':
              rover.direction = 'S';
              console.log('turnLeft was called!');
              console.log(rover.direction);
              break;
  
          case 'S':
              rover.direction = 'E';
              console.log('turnLeft was called!');
              console.log(rover.direction);
              break;
  
          case 'E':
              rover.direction = 'N';
              console.log('turnLeft was called!');
              console.log(rover.direction);
              break;
      }
      console.log(rover);
  }
  
  function turnRight(rover) {
      switch (rover.direction) {
          case 'N':
              rover.direction = 'E';
              console.log('turnRight was called!');
              console.log(rover.direction);
              break;
  
          case 'E':
              rover.direction = 'S';
              console.log('turnRight was called!');
              console.log(rover.direction);
              break;
  
          case 'S':
              rover.direction = 'W';
              console.log('turnRight was called!');
              console.log(rover.direction);
              break;
  
          case 'W':
              rover.direction = 'N';
              console.log('turnRight was called!');
              console.log(rover.direction);
              break;
      }
    
      console.log(rover);
  }
  
  function moveForward (rover) {
    
    if (rover.direction === "N") {
      rover. y--;    
    } 
    
    else if (rover.direction === "E") {
      rover. x++;
  }
      if (rover.direction === "S") {
       rover.y++;
       
     } else {
         
         rover.x--;
       }
       console.log(turnLeft(rover))
       console.log(turnLeft(rover))
       console.log ("x", "y");
  
  
       function moveBackward (rover){
        if (rover.direction != "N") {
            rover. y++;   
    
          } 
          
          else if (rover.direction != "E") {
            rover. x--;
        }
            if (rover.direction != "S") {
             rover.y--;
             
           } else {
               
               rover.x++;
             }
             console.log(moveBackward(rover))
             console.log(moveBackward(rover))
             console.log ("x", "y");
  
         
  var inst = ['f','f','l','l','r']
  
           function roverCommands (command, rover)
           for (var i= 0; i<command.lenght; i++){
               switch (command[i]) {
                   case "f":
  
            moveForward (rover);
            break;
            case "r"
            turnRight (rover);
            break;
            case "l":
            turnLeft
  
  
               }
           }
           
                   }
  
  