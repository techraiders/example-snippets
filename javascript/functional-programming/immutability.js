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

EXAMPLE OF BAD SIDE EFFECT:
The opportunity of mutation provides no guaranty that something will stay unchanged. The worst scenario takes place when some structure is used in separate parts of the application, then any mutation in one component can create a bug in the other one. Such bug is really hard to track because the source of the problem lies out of the scope of the failure.

ON THE OTHER HAND, SOME ADVANTAGES OF MUTATION:
  1. Reuse of memory: Mutation in beneficial for performance and memory usage. But we're in 21st century, memory is cheap and in micro scale of the Front End Development it does not matter if some object will be copied or not. Garbage collector will clean not used referenced for us, so no worries about memory leaks or unnecessary memory occupying.


PLACE ORIENTED PROGRAMMING:
The term presented by Rich Hicky exactly capture the sense of using mutability. If guarantee about value not exists, then our object is only a pointer to the place in the memory, nothing more. Object was created in a share A, but during the code execution it was transformed into a shape B, C, D and so on. Variables are representing memory not values.

----IMMUTABILITY IS ABOUT VALUE----
Immutability means literally that nothing can be mutated, I can go further -- Mutation does not exist. Variable represents single unchangable value. No transformation of value because valueA !== valueB. Value is a fact and fact are unchangable. If something was declared with specific value then rest of the code can fully trust that this exact value is there. This guarantee enables to say that no side effects and no unpredictabe state can be observed, most important is return of the trust, and even if some parts of the code needs slighlty different structure, they will not touch the original one but work on own version. Using memory pointers provides no guarantee and no contract.

VALUE ORIENTED PROGRAMMING:
Contary to "Place Oriented Programming", VOP is about values only. Code is operating on values not on pointers in the memory. Anything representing different value should be separated structure. The value remains unchanged from its creation until its destruction. Every poor functional language is value oriented.


ALL CHANGES SHOULD PRODUCE NEW VALUE:
Change doesn't mean mutation, change means - generate new version of the state which reflects the change. But it is applicable to all cases? This is where some developers, also me have problems with immutability. The probelem starts when exists something big, like a big collection of data, and only a small changes needs to be done. In such case creating new structure feels wrong, it feels that the memory is in very non effective way. Why I need to create whole new structure of the data, if really only single need to be added or one field needs to be changed?

and the answer is -- because the changed structure is representing a different value. The two collections, the previous and the changed one are not the same. The fat can not be changed, despite from the size of the value, value is unchangeable fact.

So if you start thingking in terms of values, then such doubt should not bother you.

Some Good References to Immutability:
https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310
*/
