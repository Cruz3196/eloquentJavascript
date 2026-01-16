/**
 * This will be a chess board
 *
 * This will need to two loops
 */
let arrOne = [1, 2, 3, 4];
let arrTwo = [1, 2, 3, 4];

for (let i = 0; i < 4; i++) {
  let convert = arrOne.map(() => " #");
  console.log(convert.join(""));
  for (let j = 0; j < 1; j++) {
    let convertTwo = arrTwo.map(() => "#");
    console.log(convertTwo.join(" "));
  }
}
