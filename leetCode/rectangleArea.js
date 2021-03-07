var computeArea = function(A, B, C, D, E, F, G, H) {
  // D > B, H > F
  // if (D > H) commonHeight = H - B;
  // else commonHeight = D - F;

  let area1 = (C - A) * (D - B);
  let area2 = (G - E) * (H - F);

  if (C <= E || G <= A || D <=F || H <= B) return area1 + area2;

  let top = D > H? H : D;
  let bottom = B > F? B : F;
  let right = C > G? G : C;
  let left = A > E? A : E;

  let commonArea = (top - bottom) * (right - left);

  return area1 + area2 - commonArea;
};