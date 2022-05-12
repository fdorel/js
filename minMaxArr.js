// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
	let numbers = [2, 4, 9, 2, 0, 16, 24];

	let sorted = numbers.slice().sort(function(a, b) {
  		return a - b;
	});

	let smallest = sorted[0],                      
    secondSmallest = sorted[1],                
    secondLargest = sorted[sorted.length - 2], 
    largest  = sorted[sorted.length - 1];

	console.log('Smallest: ' + smallest);
	console.log('Second Smallest: ' + secondSmallest);
	console.log('Second Largest: ' + secondLargest);
	console.log('Largest: ' + largest);
}	

console.log(minMax());


