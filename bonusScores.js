/*⦁	Ако числото е до 100 включително, бонус точките са 5.
⦁	Ако числото е по-голямо от 100 и по-малко или равно на 1000, бонус точките са 20% от числото.
⦁	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

⦁	Допълнителни бонус точки (начисляват се отделно от предходните):
⦁	За четно число  + 1 т.
⦁	За число, което завършва на 5  + 2 т.
 */
function bonusScores(points) {
    let bonus = 0;
    if (points <= 100) {
        bonus += 5;
    } else if (points > 1000) {
        bonus = points * 0.1;

    } else {
        bonus = points * 0.2;
    }
    if (points % 2 === 0) {
        bonus += 1;
    } else if (points % 10 === 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(bonus + points);

}
bonusScores(2703);