var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let currX = initialTx;
let currY = initialTy;
let dirX = "";
let dirY = "";
let dir;

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    if (lightX > currX) {
        dirX = "E";
        currX++;
    } else if (lightX < currX) {
        dirX = "W";
        currX--;
    } else {
        dirX = "";
    }

    if (lightY > currY) {
        dirY = "S";
        currY++;
    } else if (lightY < currY) {
        dirY = "N";
        currY--;
    } else {
        dirY = ""
    }



    dir = dirY + dirX;
    console.log(dir);
}