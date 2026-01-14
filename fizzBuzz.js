/**
 * This is the fizzbuzz game
 *
 * create an arr
 *
 * for loop that will iterate from 1 to 100
 *    use the modular operator %
 *      print "fizz" that divisible by 3
 *      print "buzz" that are divisible by 5
 *      print "fizzbuzz" that are divisible by 3 & 5
 *    increment; add the arr
 * print from 1 to 100
 *
 */
function fizzBuzz() {
  let zeroToHundred = [];
  function mod() {
    for (let counter = 1; counter <= 100; counter++) {
      if (counter % 3 == 0 && counter % 5 == 0) {
        zeroToHundred.push("FizzBuzz");
      } else if (counter % 3 == 0) {
        zeroToHundred.push("Fizz");
      } else if (counter % 5 == 0) {
        zeroToHundred.push("Buzz");
      } else {
        zeroToHundred.push(counter);
      }
    }
    return zeroToHundred;
  }
  console.log(mod().join(" "));
}
fizzBuzz();
