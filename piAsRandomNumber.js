// The higher number of iterations, the more accurate PI will be
var iterations = 6;
var mysteryNumber = parseInt((Math.random() * 10), 10);
var iteration = mysteryNumber / 2;
var i = iteration / 2;
var pi = 0;
for (let j = 0; j < iterations; j++) {
  pi += mysteryNumber / i;
  i += iteration;
  pi -= mysteryNumber / i;
  i += iteration;
}
console.log(pi);
