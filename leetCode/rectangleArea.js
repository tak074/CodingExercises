var computeArea = function(A, B, C, D, E, F, G, H) {
  let area1 = (C - A) * (D - B);
  let area2 = (G - E) * (H - F);

  let commonHeight = Math.min(D, H) - Math.max(B, F);
  let commonWidth = Math.min(C, G) - Math.max(A, E);
  commonHeight = commonHeight > 0? commonHeight : 0;
  commonWidth = commonWidth > 0? commonWidth : 0;

  return area1 + area2 - (commonHeight * commonWidth);
};
