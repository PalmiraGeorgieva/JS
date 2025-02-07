function hospital(input) {
    let period = Number(input[0]);
    let checkedPeople = 0;
    let uncheckedPeople = 0;
    let startCountDostors = 7;
    for (let i = 1; i <= period; i++) {
        let patientDay = Number(input[i]);

        if ( i % 3 === 0 && uncheckedPeople > checkedPeople) {
            startCountDostors++;
        }

        if (patientDay <= startCountDostors) {
            checkedPeople += patientDay;
        } else {
            checkedPeople += startCountDostors;
            uncheckedPeople += (patientDay - startCountDostors);
        }


    }
    console.log(`Treated patients: ${checkedPeople}.`)
    console.log(`Untreated patients: ${uncheckedPeople}.`)
}
hospital((["4",
    "7",
    "27",
    "9",
    "1"]))