var validIPAddress = function(IP) {

  // test if given numbers are ipv4 address
  var IPv4Test = function(arr) {
    // check each numbers
    let valids = 0;
    arr.forEach((num) => {
      // check if number and has a leading zero
      if (num === Number(num).toString()) {
        // check if the value is within range
        if (Number(num) >= 0 && Number(num) <= 255) {
          valids++;
        }
      }
    })
    // boolean value of whether everything num in arr was valid
    return (valids === arr.length);
  }

  // test if given numbers are ipv6 address
  var IPv6Test = function(arr) {
    // check each numbers
    let valids = 0;
    arr.forEach((num) => {
      // check if the length is within range
      if (num.length >= 1 && num.length <= 4) {
        // counter to validate this element
        let numVal = 0;
        // check if it contains number or 'A' to 'F'
        for (let i = 0; i < num.length; i++) {
          let letterRange = ['A', 'B', 'C', 'D', 'E', 'F'];
          if (!!Number(num[i]) || letterRange.indexOf(num[i].toUpperCase()) !== -1 || Number(num[i]) === 0) {
            numVal++;
          }
        }
        // if every char in num is valid
        if (numVal === num.length) {
          // increment valids
          valids++
        }
      }
    })
    // boolean value of whether everything num in arr was valid
    return (valids === arr.length);
  }

  // try dividing it by '.'
  var arrV4 = IP.split('.');
  // if the length is 4
  if (arrV4.length === 4) {
    // start ipv4 test
    var IPv4 = IPv4Test(arrV4);
    // if true, return "IPv4";
    if (IPv4) {
      return "IPv4"
    }
  }
  // try dividing it by ':'
  var arrV6 = IP.split(':');
  // if the length is 8
  if (arrV6.length === 8) {
    // start ipv6 test
    var IPv6 = IPv6Test(arrV6);
    // if true, return "IPv6"
    if (IPv6) {
      return "IPv6";
    }
  }

  // if it's neither, return "Neither"
  return "Neither";
};