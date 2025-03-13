/*Торта  – цената ѝ е 20% от наема на залата
Напитки – цената им е 45% по-малко от тази на тортата
Аниматор – цената му е 1/3 от цената за наема на залата
 */
function birthday(rentHall) {
    let birthdayCake = rentHall * 0.20;
    let drinks = birthdayCake * 0.55;
    let animator = 1 / 3 * rentHall
    let neededSum = rentHall + birthdayCake + drinks + animator;
    console.log(neededSum)
}
birthday(2250)