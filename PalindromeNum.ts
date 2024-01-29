//https://leetcode.com/problems/palindrome-number/
function isPalindrome(x: number): boolean {
    const str = x.toString()
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        if (!(str[i] == str[(str.length) - (i + 1)])) {
            return false
        }
    }
    return true
};