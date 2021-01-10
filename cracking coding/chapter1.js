// Q1
var allUnique = function (str) {
  let unique = true;
  let counter = 0;

  while (unique && counter < str.length) {
    if (str.slice(counter + 1).indexOf(str[counter]) !== -1) unique = false;
    counter++;
  }

  return unique;
}

let sample = 'strings';

console.log(allUnique(sample));