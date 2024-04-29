// Question 3

// declare variable as the maximum number that the loop will begin decreasing. In this case 999.
// Use a loop to print all numbers from 100 to 999 in decreasing order (use For or while loop)


function printNumbers() {
    let x = 999;
    while (x >= 100) {
        console.log(x)
        x--;
    }
}
// test case
printNumbers();

//Question 4

// Integer x returns true if it is a palindrome and false if it is not.
// convert the number to a string
// reverse string
// check if the original string is equal to the reversed
function isPalindrome(x) {
    const num = String(x); 
    const reversednum = num.split('').reverse().join(''); 
    return num === reversednum; 
  }

  //test cases
console.log(isPalindrome(121)); 
console.log(isPalindrome(-121));
console.log(isPalindrome(10)); 

