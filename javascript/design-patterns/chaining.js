console.clear();

var Calc = function (start){
  this.add = function (value) {
    start += value;
    return this;
  };
  this.multiply = function (value) {
    start *= value;
    return this;
  };
  this.equals = function (callback) {
    callback(start);
    return this;
  };
};

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function(result){
      console.log(result);
    });
