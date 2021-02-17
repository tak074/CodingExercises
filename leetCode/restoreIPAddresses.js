var restoreIpAddresses = function(s) {
  // simple cases
  if (s.length < 4) return [];

  let findAddress = function(str, place) {
    if (str.length === 0) return false;
    let res = [];
    let path = false;
    if (str[0] === '0') {
      if (str.length - 1 <= 12 - (place * 3)) {
        if (str[1] !== undefined && place === 4) {
          return false;
        }
        let currAddress = [0];
        if (place === 4) {
          res.push(currAddress);
          path = true;
        } else {
          let rest = findAddress(str.slice(1), place + 1);
          if (rest !== false) {
            path = true;
            rest.forEach((comb) => {
              res.push(currAddress.concat(comb));
            })
          }
        }
      }
    } else {
      let currAddress = [];
      // one digit
      if (str.length - 1 <= 12 - (place * 3)) {
        currAddress = [str[0]];
        if (place === 4) {
          res.push(currAddress);
          path = true;
        } else {
          let rest = findAddress(str.slice(1), place + 1);
          if (rest !== false) {
            path = true;
            rest.forEach((comb) => {
              res.push(currAddress.concat(comb));
            })
          }
        }
      }
      // two digit
      if (str.length - 2 <= 12 - (place * 3)) {
        currAddress = [str.slice(0, 2)];
        if (place === 4) {
          res.push(currAddress);
          path = true;
        } else {
          let rest = findAddress(str.slice(2), place + 1);
          if (rest !== false) {
            path = true;
            rest.forEach((comb) => {
              res.push(currAddress.concat(comb));
            })
          }
        }
      }
      if ((str.length - 3 <= 12 - (place * 3)) && (Number(str.slice(0, 3)) < 256)) {
        currAddress = [str.slice(0, 3)];
        if (place === 4) {
          res.push(currAddress);
          path = true;
        } else {
          let rest = findAddress(str.slice(3), place + 1);
          if (rest !== false) {
            path = true;
            rest.forEach((comb) => {
              res.push(currAddress.concat(comb));
            })
          }
        }
      }
    }
    if (!path) return false;
    return res;
  }

  let ans = findAddress(s, 1);
  if (ans === false) return [];
  let dict = {};
  ans.forEach((arr) => {
    dict[arr.join('.')] = true;
  })

  return Object.keys(dict);
};