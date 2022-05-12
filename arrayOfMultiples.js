//  Array of Multiples - Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples (num, length) {

const multiples = (num, length) => {
   const result = []
   for (let i = num; i <= num * length; i += num){
      result.push(i)
   }
   return result
};
console.log(multiples(5, 8))
}
arrayOfMultiples();