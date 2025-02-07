function pen4oOdyssey(doorNumber) {
    let tresureRoom = 3
    if (doorNumber === 1 && doorNumber != tresureRoom) {
        console.log(`A bucket of cold water splashes on you! Unlucky Pen4o!`)

    } else if (doorNumber === 2 && doorNumber != tresureRoom) {
        console.log (`A bucket of cold water splashes on you! Unlucky Pen4o!`)

    } else if (doorNumber === 3 && doorNumber == tresureRoom) {
       console.log(`Congratulations, Pen4o! You found the treasure behind Door ${tresureRoom}!`)

    } else {
        console.log(`Invalid choice. Please select Door 1, 2, or 3.`)
    }
}
pen4oOdyssey(4)
