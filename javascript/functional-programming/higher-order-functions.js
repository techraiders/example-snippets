function multiplier (factor) {
  return function (x) {
    return x * factor;
  }
}

var doubler = multiplier(2),
    trippler = multiplier(3);
    
console.log(doubler(4)); // 8
console.log(trippler(4)); // 12
    
