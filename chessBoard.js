/**
 * This will be a chess board
 *
 * This will need two loops
 */

//! My solution
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

//* solution from book
//** */ let size = 8;
//** */ for (let i = 0; i < 8; i++) {
//** */   if (i % 2 === 0) {
//** */     console.log(" # # # #"); // Even rows
//** */   } else {
//** */     console.log("# # # #"); // Odd rows
//** */   }
//** */ }
