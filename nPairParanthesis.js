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

    var result = [];
    for (var i = 0; i < n; ++i) {

        var lefts = nPair(i);
        var rights = nPair(n - i - 1);

        for (var l = 0; l < lefts.length; ++l)
            for (var r = 0; r < rights.length; ++r)
                result.push("(" + lefts[l] + ")" + rights[r]);
    }

