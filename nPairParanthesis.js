function b(str) {
    let rightParentheses = '(';
    let leftParentheses = ')';
    let rightCount = 0;
    let leftCount = 0;

    for (var i = 0; i <= str.length; i++) {
       if (rightParentheses == str.charAt(i))
          rightCount++;
       else if (leftParentheses == str.charAt(i))
          leftCount++;
       else if (rightCount < leftCount)
          return 0;
    }
    return 1;
}
console.log(b("(()"));
