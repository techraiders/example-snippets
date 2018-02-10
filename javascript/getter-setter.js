var language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']

language.current = 'Marathi';
console.log(language.log); // ["EN", "FA", "Marathi"]


/****************** SETTER USING COMPUTED EXPRESSION ********************/
var expr = 'foo';

var obj = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = 'baz';      // run the setter
console.log(obj.baz); // "baz"

/****************************** SETTING GETTERS AND SETTER IN ANGULAR JS CONTROLLERS *******************************/


function MyController() {
  var items = [];

  Object.defineProperty(this, 'items', {
    get: function() {
      return items;
    },

    set: function(newVal) {
      items = newVal;
      console.log('Items changed:', newVal);
    }
  });
}