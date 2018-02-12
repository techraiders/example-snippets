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


SIDE EFFECTS OF MUTATION:
  1. Side effect is anything which has impact on the outside of the currect scope. If many parts of the code are dealing with the same reference then any change will impact all the parts.
  2. Side effects are bad because code starts to be tightly coupled, code fragemts instead of following single responsibility rule are doing uncontrolled things outside the scope, they have impact on wider application context.
  3. Touching outside is always risky and has unpredictable consequences. When a bug will be found the question will be risen, where it was changed? What exactly was changed? Who also have access to the reference? But no history of change is available, and questions can't be easily answered.
  
Example: Transformation of Car objet in Bike object.
JavaScript is very flexible, it means that any object can be transformed on the fly into something really different.
In one line it can be an object representing a dog, and in the next line the dog can be mutated into a chicked. Such situation enhances fears about the state shape and code predictability.

EXAMPLE OF BAD SIDE EFFECT: The opportunity of mutation provides no guaranty that something will stay unchanged. The worst scenario takes place when some structure is used in separate parts of the application, then any mutation in one component can create a bug in the other one. Such bug is really hard to track because the source of the problem lies out of the scope of the failure.

ON THE OTHER HAND, SOME ADVANTAGES OF MUTATION:
  1. Reuse of memory: Mutation in beneficial for performance and memory usage. But we're in 21st century, memory is cheap and in micro scale of the Front End Development it does not matter if some object will be copied or not. Garbage collector will clean not used referenced for us, so no worries about memory leaks or unnecessary memory occupying.

Some Good References to Immutability:
https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310
*/
