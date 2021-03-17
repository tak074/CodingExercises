var hIndex = function(citations) {
  let h = 1;
  while (citations[citations.length - h] && citations[citations.length - h] >= h) h++;
  return h - 1;
};