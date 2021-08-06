module.exports = {
    open: (passes, doors, onDoorStateChange) => {
        let doorState = '#'.repeat(doors);
        for (let i = 0; i < passes; i++) {
            doorState = updateDoorState(doorState, i + 1);
            onDoorStateChange && onDoorStateChange(doorState);
        }
        return doorState;
    }
}

function updateDoorState(doorState, currentIteration) {
    let newState = "";
    for (let doorNumber = 1; doorNumber < doorState.length + 1; doorNumber++) {
        if (doorNumber % currentIteration === 0)
            newState += doorState[doorNumber - 1] == '@' ? '#' : '@';
        else
            newState += doorState[doorNumber - 1];
    }
    return newState;
}
