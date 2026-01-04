/** for this exercise, you will create a loop that prints a triangle
 *  start
 *
 *   int the arr
 *
 *   for 1 through 7:
 *     add the current number to the arr
 *    convert each number in the arr to an asterisk
 *   join the asterisks with a space
 *  print the joined asterisks
 *
 *  end
 */

let arr = [];

for (let counter = 1; counter <= 7; counter++) {
  arr.push(counter);
  let conversion = arr.map(() => "*");
  let triangleAsterisk = conversion.join(" ");
  console.log(triangleAsterisk);
}
