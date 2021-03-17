var hIndex = function(citations) {

  citations.sort((a,b) => a - b);

  let index = 0;
  let h = 1;

  while (!!citations[citations.length - h] && citations[citations.length - h] >= h) {
      h++;
  }

  return h - 1;
};