/* ARRAY METHODS MUTATING VS NOT-MUTATING
JavaScript offers several ways to add, remove and replace items in an array - but some of these ways mutate the array 
and others are non-mutating, they produces a new array:

Mutating methods:
  1. array.push()
  2. array.unshift()
  2. array.pop()
  3. array.shift()
  
Non-Mutating methods:
  1. array.filter()
  2. array.slice()
  3. array.splice()
  4. array.map()
  
Best Practice: Although you can mutate an array assigned to a const without throwing an error, assign array to a const when using non-mutating methods, and let for mutating ones. I use const as a signal to other developers that the  assignes value will not change.
  
*/
