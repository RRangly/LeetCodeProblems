//https://leetcode.com/problems/reverse-integer/

function reverse(x: number): number {
    let digit, result = 0

    while(x){
        digit = x % 10
        result = (result * 10) + digit
        x = x/10|0
    }
    
    if (result > (2**31-1) || result < -(2**31)) return 0
  
    return result
};