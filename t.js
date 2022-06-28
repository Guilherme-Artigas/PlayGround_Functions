function repete(arg1) {
  let simQnt = 0;
  let c = 0;
  for (let i1 of arg1) {
    for (let i2 of arg1) {
      if (i1 === i2) {
        c += 1;
      }
      if (c >= 3) {
        simQnt = c;
      };
    };
    c = 0;
  };
  return simQnt;
};
console.log(repete([1, 3, 5, 8, 11, 52, 2, 7, 3, 8, 2, 11, 17, 8, 1, 3, 4, 5, 6, 7, 52]));