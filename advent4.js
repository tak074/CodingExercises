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
  var newlyOrganized = [];
  // change the str into array
  passport = passport.split('\n\n');
  for (var i = 0; i < passport.length; i++) {
    var currPass = passport[i];
    currPass = currPass.split(/[\s\n]+/);

    var entry = {};
    // change each components into key:value pair
    currPass.forEach((str) => {
      var key = str.slice(0,3);
      var value = str.slice(4);
      entry[key] = value;
    });
    // push the entry into the newlyOrganized array
    newlyOrganized.push(entry);
  }

  function test (obj) {
    var byr = obj['byr'];
    byr = (byr.length === 4 && Number(byr) >= 1920 && Number(byr) <= 2002);

    var iyr = obj['iyr'];
    iyr = (iyr.length === 4 && Number(iyr) >= 2010 && Number(iyr) <= 2020);

    var eyr = obj['eyr'];
    eyr = (eyr.length === 4 && Number(eyr) >= 2020 && Number(eyr) <= 2030);

    var hgt = obj['hgt'];
    if (hgt.indexOf('cm') !== -1) {
      var height = hgt.slice(0,-2);
      hgt = (Number(height) >= 150 && Number(height) <= 193);
    } else {
      var height = hgt.slice(0,-2);
      hgt = (Number(height) >= 59 && Number(height) <= 76);
    }

    var hcl = obj['hcl'];
    if (hcl.indexOf('#') !== -1) {
      var ver = true;
      for (var hairNum = 1; hairNum < hcl.length; hairNum++){
        var charSet = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var currChar = hcl[hairNum];
        if (charSet.indexOf(currChar) === -1) {
          ver = false;
          break;
        }
      }
      hcl = ver? true: false;
    } else {
      hcl = false;
    }

    var ecl = obj['ecl'];
    var eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    if (ecl.length === 3) {
      if (eyeColors.indexOf(ecl) !== -1) {
        ecl = true;
      } else {
        ecl = false;
      }
    } else {
      ecl = false;
    }

    var pid = obj['pid'];
    pid = Number(pid)? pid.length === 9 : false;

    // all tests must be true;
    return (byr && iyr && eyr && hgt && hcl && ecl && pid)? true: false;
  };

  for (var k = 0; k < newlyOrganized.length; k++) {
    var currEntry = newlyOrganized[k];
    console.log(Object.keys(currEntry));
    if ((Object.keys(currEntry)).length === 7) {
      if (!currEntry['cid']){
        // test
        if (test(currEntry)) {
          counter++;
        }
      }
    } else if ((Object.keys(currEntry)).length === 8) {
      // test
      if (test(currEntry)) {
        counter++;
      }
    }
  }

  return counter;
}