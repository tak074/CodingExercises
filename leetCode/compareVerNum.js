var compareVersion = function(version1, version2) {
  // make it into numbers
  let ver1 = version1.split('.');
  let ver2 = version2.split('.');

  let i = 0;
  while (ver1[i] && ver2[i]) {
    if (Number(ver1[i]) !== Number(ver2[i])) {
      if (Number(ver1[i]) > Number(ver2[i])) return 1;
      else return -1;
    }
    i++;
  }
  if (ver1[i] && !ver2[i] && Number(ver2.slice(i).join('')) !== 0) return 1;
  if (ver2[i] && !ver1[i] && Number(ver1.slice(i).join('')) !== 0) return -1;
  // forgot the 0 case

  return 0;
};