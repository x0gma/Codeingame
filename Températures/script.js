const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ').map(Number);

function findClosestToZero(array) {
    if (!array || array.length === 0) {
        console.log(0);
    }

    let closestValue = array[0];

    for (let i = 1; i < n ; i++){
        const currentAbs = Math.abs(array[i]);
        const closestAbs = Math.abs(closestValue);

        if (currentAbs < closestAbs || (currentAbs === closestAbs && array[i] > closestValue)) {
            closestValue = array[i];
        }
    }

    console.log(closestValue);
};

findClosestToZero(inputs);