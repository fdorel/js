//Array methods
//Length method
var items = ['shoes', 'shirts', 'socks', 'sweaters'];
items.length;
//console.log(items.length);

// Concat() method
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

//console.log(array3);
//////////////////////////////////////////////////////////////////////////////////////////////////
// copyWithin() method

const array7 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array7.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array7.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

///////////////////////////////////////////////////////////////////////////////////////////////////
// entries() method
// The entries() method returns a new Array Iterator
// object that contains the key/value pairs for each index in the array.

const array8 = ['a', 'b', 'c'];

const iterator1 = array8.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

////////////////////////////////////////////////////////////////////////////////////////////////
// every() method should return
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array9 = [1, 30, 39, 29, 10, 13];

console.log(array9.every(isBelowThreshold));

////////////////////////////////////////////////////////////////////////////////////////////

//fill() method
//The fill() method changes all elements in an array to a static value, 
//from a start index (default 0) to an end index (default array.length). It returns the modified array.
const array10 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array10.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array10.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array10.fill(6));
// expected output: [6, 6, 6, 6]

//fill(value)
//fill(value, start)
//fill(value, start, end)

////////////////////////////////////////////////////////////////////////////////////////////////////
// filter() method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

///////////////////////////////////////////////////////////////////////////////////////////////
// find() method
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.

const array11 = [5, 12, 8, 130, 44];

const found = array11.find(element => element > 10);

console.log(found);
// expected output: 12

/////////////////////////////////////////////////////////////////////////////////////////////////
// findIndex() method
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
//  Otherwise, it returns -1, indicating that no element passed the test.

const array12 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 20;

console.log(array12.findIndex(isLargeNumber));

///////////////////////////////////////////////////////////////////////////////////////////////////
//flat() method
//The flat() method creates a new array with all sub-array elements concatenated
//into it recursively up to the specified depth.

const arr13 = [0, 1, 2, [3, 4]];

console.log(arr13.flat());
// expected output: [0, 1, 2, 3, 4]

const arr20 = [0, 1, 2, [[[3, 4]]]];

console.log(arr20.flat(2));
// expected output: [0, 1, 2, [3, 4]]

/////////////////////////////////////////////////////////////////////////////////////////////////
//forEach() method
//The forEach() method executes a provided function once for each array element.

const array14 = ['a', 'b', 'c'];

array14.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

/////////////////////////////////////////////////////////////////////////////////////////////
// includes() method
//The includes() method determines whether an array includes a certain value among its entries,
// returning true or false as appropriate.
const array15 = [1, 2, 3];

console.log(array15.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

////////////////////////////////////////////////////////////////////////////////////////////
//indexOf() method
//The indexOf() method returns the first index at which a given element can be found in the array,
// or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

/////////////////////////////////////////////////////////////////////////////////////////////
//isArray() method
//The Array.isArray() method determines whether the passed value is an Array.
Array.isArray([1, 2, 3]);  // true
Array.isArray({ foo: 123 }); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false

// join() method
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
// separated by commas or a specified separator string. If the array has only one item, 
// then that item will be returned without using the separator.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

///////////////////////////////////////////////////////////////////////////////////////////////////////
// keys() method
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
const array16 = ['a', 'b', 'c'];
iterator = array16.keys();

for (const key of iterator) {
    console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2

////////////////////////////////////////////////////////////////////////////////////////////////////
// lastIndexOf() method
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
// The array is searched backwards, starting at fromIndex.
const animals1 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals1.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals1.lastIndexOf('Tiger'));
// expected output: 1

/////////////////////////////////////////////////////////////////////////////////////////////////////
// map() method
// The map() method creates a new array populated with the results of calling a provided function
// on every element in the calling array.
const array17 = [1, 4, 9, 16];

// pass a function to map
const map1 = array17.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

/////////////////////////////////////////////////////////////////////////////////////////////////
// of() method
//The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
// The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element,
// 7, whereas Array(7) creates an empty array with a length property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values).
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]

////////////////////////////////////////////////////////////////////////////////////////////////
// pop() method
// The pop() method removes the last element from an array and returns that element.
// This method changes the length of the array.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

//////////////////////////////////////////////////////////////////////////////////////
// push() method
// The push() method adds one or more elements to the end of an array and returns the new
// length of the array.
const animalss = ['pigs', 'goats', 'sheep'];

const count = animalss.push('cows');
console.log(count);
// expected output: 4
console.log(animalss);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animalss.push('chickens', 'cats', 'dogs');
console.log(animalss);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//////////////////////////////////////////////////////////////////////////////////////
// reduce() method
// The reduce() method executes a user-supplied “reducer” callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element. 
//The final result of running the reducer across all elements of the array is a single value.
// The first time that the callback is run there is no "return value of the previous calculation".
// If supplied, an initial value may be used in its place.
// Otherwise array element 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:

const array18 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array18.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array18.reduce(reducer, 5));
// expected output: 15

/////////////////////////////////////////////////////////////////////////////////////
// reverse() method
// The reverse() method reverses an array in place. 
//The first array element becomes the last, and the last array element becomes the first.

const array19 = ['one', 'two', 'three'];
console.log('array1:', array19);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array19.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array19:', array19);
// expected output: "array1:" Array ["three", "two", "one"]

///////////////////////////////////////////////////////////////////////////////////////
// shift() method
// The shift() method removes the first element from an array and returns that removed element.
// This method changes the length of the array.
const array20 = [1, 2, 3];

const firstElement = array20.shift();

console.log(array20);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

//////////////////////////////////////////////////////////////////////////////////////
//slice() method
//The slice() method returns a shallow copy of a portion of an array into a new array 
//object selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.

const animalsss = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animalsss.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animalsss.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animalsss.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animalsss.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animalsss.slice(2, -1));
// expected output: Array ["camel", "duck"]

////////////////////////////////////////////////////////////////////////////////////
//some() method
//The some() method tests whether at least one element in the array passes the test
// implemented by the provided function. It returns true if,
// in the array, it finds an element for which the provided function returns true;
// otherwise it returns false. It doesn't modify the array.

const array21 = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array21.some(even));
// expected output: true

///////////////////////////////////////////////////////////////////////////////////
//sort() method
//The sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is ascending, built upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.
//The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array22 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array22);
// expected output: Array [1, 100000, 21, 30, 4]

///////////////////////////////////////////////////////////////////////////////////
//splice() method
// The splice() method changes the contents of an array by removing or replacing existing 
//elements and/or adding new elements in place. To access part of an array without modifying it,
// see slice().
const monthss = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(monthss);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

monthss.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(monthss);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

////////////////////////////////////////////////////////////////////////////////////
//toLocaleString() method
//The toLocaleString() method returns a string representing the elements of the array.
// The elements are converted to Strings using their toLocaleString methods and these Strings
// are separated by a locale-specific String (such as a comma “,”).
const array23 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array23.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

/////////////////////////////////////////////////////////////////////////////
// unshift() methods
// The unshift() method adds one or more elements to the beginning of an array
// and returns the new length of the array.

const array24 = [1, 2, 3];

console.log(array24.unshift(4, 5));
// expected output: 5

console.log(array24);
// expected output: Array [4, 5, 1, 2, 3]

///////////////////////////////////////////////////////////////////////////////
// values() method
//The values() method returns a new array iterator object that contains the values 
//for each index in the array.
const array25 = ['a', 'b', 'c'];
iterator = array25.values();

for (const value of iterator) {
    console.log(value);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"