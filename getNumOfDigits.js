// Create a function that gets number of digits.

function num_of_digits(num) {
	return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1
}

