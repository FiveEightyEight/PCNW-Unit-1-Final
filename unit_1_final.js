/*
    Unit 1 : Final
    Please work on this file. Once you're done upload this on canvas.
*/



/* 1
    @func combinedString
    @param str1 {string}
    @param str2 {string}
    @returns {string}
    @desc - Given 2 string parameters, return a combined string with  
            first string then second string 2 times.
    @example - 
        console.log(combinedString('hello', 'world')); // helloworldworld
        console.log(combinedString('a', 'b')); // abb
        console.log(combinedString('b', 'a')); // baa
        console.log(combinedString('Mo ', 'Mo')); // Mo MoMo
*/


/* 2
    @func swap
    @param a {any}
    @param b {any}
    @desc - Given 2 global variables a and b. Swap the values so that a 
            holds the value of b, and b holds the value of a.
    @example - 
        let var1 = 'Hello';
        let var2 = 100;
        swap(var1, var2);
        console.log(var1); // 100
        console.log(var2); // 'Hello'

        let var3 = 999;
        let var4 = 123;
        swap(var1, var2);
        console.log(var3); // 123
        console.log(var4); // 999
*/


/* 3
    @func isDivisibleByThree
    @param num {number}
    @returns {boolean}
    @desc - Given a number, return true if the number is divisible by 3.
            False if it isn't.
    @example - 
        console.log(isDivisibleByThree(2)); // false
        console.log(isDivisibleByThree(3)); // true

*/


/* 4
   Given the following function, we use `let` twice to declare `i`
   Explain why it does not throw an error. 

   Write your answer as a comment below.

   function foobar() {
     for (let i =0; i < 5; i++) {
       console.log(i)
     }

     for (let i = 0; i < 10; i++) {
       console.log(i)
     }
   }

   foobar()
*/

/* 5
   Given the following function, we define a const foo in the correct scope, 
   Explain why it *does* throw an error

   Write your answer as a comment below.

   function run1() {
    function _inner() {
      console.log(foo);
    }
    _inner();
    const foo = 2;
   }

   run1()
*/


/* 6
   Given the following function, we define a const foo in the correct scope, 
   Explain why it *does NOT* throw an error

   Write your answer as a comment below.

   function run2() {
    function _inner() {
      console.log(foo);
    }
    const foo = 2;
    _inner();
   }

   run2()
*/


/* 7
    @func loopForwardAndBackwards
    @param start {number}
    @param end {number}
    @desc - Given a start and an end, write two loops. 
            One counts from the start to the end and console.logs the value at each iteration.
            The other counts from the end to the start and console.logs the value at each iteration.
            The function does not return anything. Assume start will always be less than end. 
    @example - 
          loopForwardAndBackwards(1, 5); 
          // 1
          // 2
          // 3
          // 4
          // 5
          // 5
          // 4
          // 3
          // 2
          // 1
*/

/* 8
   @func displayArray
   @param arr {array}
   @desc - Given an array, loop through each item and log it to console
           This function does not return anything
    @example - 
          displayArray([1,2,3,4,5])
          // 1
          // 2
          // 3
          // 4
          // 5
*/

/*  9
   @func addPeriods
   @param arr {array}
   @returns {array}
   @desc - Given an array of strings (assume only arrays of strings are entered)
           return a NEW array with a period at the end of each string
   @example -
          addPeriods(["Liz", "Mo", "Taq"])
          // ["Liz.", "Mo.", "Taq."]

*/

/* 10
   @func midArray
   @param arr {array}
   @returns {number}
   @desc - Given an array, if the array has an odd number of elements, return the middle element
           Otherwise, return the AVERAGE of the middle two elements
    @example -
      midArray([1,2,3]); // 2
      midArray([1,2,3,4]); // 2.5

*/

/* 11
   @func getEvens
   @param arr {array}
   @returns {array}
   @desc - Given an array, return ONLY the even numbers in the array
           You MUST use the Array.reduce method to solve this problem
   @example -
      getEvens([1,2,3,4,5,6,7,8,9,10]) // [2,4,6,8,10]
*/

/* 12
   @func mapOther
   @param arr {array}
   @param cb {function}
   @returns {array}

   @desc - Given an array, return a new array with every OTHER element (so the first item, the third, etc)
           transformed by the callback.

           The callback takes only one parameter - the current element of the array
   @example - 
      mapOther([1,2,3,4,5], (currentElement) => {
        return currentElement ** 2;
      }); // [1, 2, 9, 4, 25] -- NOTICE: in here, we squared 1, 3 and 5 to get 1, 9, 25 

      mapOther(["Javascript", "C++", "Python"], (currentElement) => {
        return `${currentElement} is awesome!`;
      }); // ["Javascript is awesome!", "C++", "Python is awesome!"] -- NOTICE: in here, we added a string ONLY to "Javascript" and "Python"

*/


/* 13
    @func insertIntoObject 
    @param obj {object}
    @param keys {array}
    @param value {any}
    @returns {object}

    @desc - Given an object, return a new object with the original object plus
            new property keys with the passed in keys and values.
    
    @example - 
            insertIntoObject({a: 1, b: 2}, ["c", "d", "e"], 8); 
                          // {a: 1, b: 2, c: 8, d: 8, e: 8}
            insertIntoObject({firstName: "John", lastName: "Smith"}, ["middleName", "superHeroName"], 'Mo');  
                          // {firstName: "John", lastName: "Smith", middleName: "Mo", superHeroName: 'Mo'}

*/


/* 14 
    @func deconstructedObject
    @param obj {object}
    @returns {array}
    
    @desc - Given an object, return an array with all the keys in the array,
            followed by all the values.

    @example - 
            deconstructedObject({a: 1, b: 2, c: 3})
                                // ['a', 'b', 'c', 1, 2, 3]
            deconstructedObject({name: "John", age: 50})
                                // ["name", "age", "John", 50]
*/


/* 15 

    Define a @class called Fellow
    With @properties: name, age
    With @methods: 
        profile() // Returns the Fellow's profile. Eg. "John is a 50 year old fellow."

    @example - 
            const john = new Fellow('John', 50);
            const sally = new Fellow('Sally', 30);

            john.profile(); // "John is a 50 year old fellow."
            sally.profile(); // "Sally is a 30 year old fellow."

*/


/* 16

    Define a @class called Cohort
    With @properties: name, fellows
    With @methods: 
        addFellow(name, age) // Adds fellow to the list of fellows for this cohort
        fellowsUnder(age) // Returns all the fellows in the class who are less than the age
        
    @example - 
          const nw = new Cohort('5.2');
          nw.addFellow('John', 50);
          nw.addFellow('Sally', 30);
          nw.addFellow('Emily', 20);

          nw.fellowsUnder(20)
                // []
          nw.fellowsUnder(50)
                // [ Fellow {name: 'Sally', age: 30},  Fellow {name: 'Emily', age: 20} ]
          nw.fellowsUnder(100)
                // [ Fellow {name: 'John', age: 50}, Fellow {name: 'Sally', age: 30},  Fellow {name: 'Emily', age: 20} ]

*/