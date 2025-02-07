function pen4oOdyssey(doorNumber) {
    if(doorNumber !== 1 && doorNumber !== 2 && doorNumber !==3) {
        console.log(`Invalid choice. Please select Door 1, 2, or 3.`);
        return;

    }

    let treasureRoom = Math.floor(Math.random() * 3) + 1;

    if (doorNumber === treasureRoom) {
        console.log(`Congratulations, Pen4o! You found the treasure behind Door ${treasureRoom}!`)
    } else {
        console.log(`A bucket of cold water splashes on you! Unlucky Pen4o!`)

    }

    
}    
pen4oOdyssey(4)
