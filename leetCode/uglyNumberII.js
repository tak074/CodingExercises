var nthUglyNumber = function(n) {
  let res = [1];

  let index1 = 0;
  let index2 = 0;
  let index3 = 0;

  while (!res[n - 1]) {
    let c1 = res[index1] * 2;
    let c2 = res[index2] * 3;
    let c3 = res[index3] * 5;

    let min = Math.min(c1, c2, c3);
    if (min === c1) index1++;
    if (min === c2) index2++;
    if (min === c3) index3++;

    res.push(min);
  }

  return res[n - 1];
};