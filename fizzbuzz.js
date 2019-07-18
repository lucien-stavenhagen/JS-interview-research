//
// Fizz-buzz interview question
// solution slighly beyond the
// naive solution, using a JS closure.
//
// just to show I can write code when not
// terrified in an interview. Came up with it
// all on my own over morning coffee.
//
// this is _believed_ to be correct, anyway....
//
// If so, this produces the solution to
// "Write a program that prints all
// the numbers from 1 to 100.
// For multiples of 3, instead of the number,
// print "Fizz", for multiples of 5 print "Buzz".
// For numbers which are multiples of both 3 and 5,
// print "FizzBuzz".
//

const checkModulo = fizzbuzzfactor => {
  return input => {
    return input % fizzbuzzfactor === 0;
  };
};

const fizz = checkModulo(3);
const buzz = checkModulo(5);

const fizzbuzzGenerator = () => {
  let fizzbuzzOutput = "";
  for (let i = 1; i <= 100; i++) {
    if (fizz(i) && buzz(i)) {
      fizzbuzzOutput += "FizzBuzz ";
    } else if (buzz(i)) {
      fizzbuzzOutput += "Buzz ";
    } else if (fizz(i)) {
      fizzbuzzOutput += "Fizz ";
    } else {
      fizzbuzzOutput += `${i} `;
    }
  }
  return fizzbuzzOutput;
};

console.log(fizzbuzzGenerator());
