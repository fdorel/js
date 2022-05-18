// Write a JavaScript function to check whether an 'input' is an array or not.

var CheckArr = function(input) {
	if (toString.call(input) === "[object Array]")
	  	return true
		return false
	  }
  console.log(CheckArr('Yes'))
  console.log(CheckArr([55, 70, 9, 88,  -5]))
