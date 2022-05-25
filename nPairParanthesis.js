//Create a function that reads "num" which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses.

function b(num) {
    let rightParentheses = '(';
    let leftParentheses = ')';
    let rightCount = 0;
    let leftCount = 0;

    for (var i = 0; i <= num.length; i++) {
       if (rightParentheses == num.charAt(i))
          rightCount++;
       else if (leftParentheses == num.charAt(i))
          leftCount++;
       else if (rightCount < leftCount)
          return 0;
    }
    return 1;
}
console.log(b("(()"));

function nPair(n) {
    if (n == 0)
        return [""];


