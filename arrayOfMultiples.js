//  Array of Multiples - Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

const arrayOfMultiples = (num, length) => {
   const result = []
   for (let i = num; i <= num * length; i += num){
      result.push(i)
   }
   return result
};
console.log(arrayOfMultiples(5, 8))