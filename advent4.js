function verifyPassport(passport) {
  var counter = 0;
  // change the str into array
  passport = passport.split('\n\n');
  // find indexof each criteria
  for (var i = 0; i < passport.length; i++) {
    var currPass = passport[i];
    // if it passes all counter++
    if (currPass.indexOf('byr') !== -1 &&
        currPass.indexOf('iyr') !== -1 &&
        currPass.indexOf('eyr') !== -1 &&
        currPass.indexOf('hgt') !== -1 &&
        currPass.indexOf('hcl') !== -1 &&
        currPass.indexOf('ecl') !== -1 &&
        currPass.indexOf('pid') !== -1
        ) {
        counter++;
    }
  }

  return counter;
}

function actualVerifier(passport) {
  var counter = 0;
  // change the str into array
  passport = passport.split('\n\n');
  for (var = i; i < passport.length; i++) {
    var currPass = passport[i];
    currPass = currPass.split(/[\s\n]+/);
    counter++
    console.log(currPass);
  }

  return counter;
}