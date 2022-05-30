// Create a function that returns the last element found in a specified array.

const total = ['elem1', 'elem2', 'elem3']

function lastItem (arr) {
  return arr.at(-1)
}
const t1 = lastItem (total)
console.log(t1)

total.push('elem4')
const t2 = lastItem (total)
console.log(t3)
