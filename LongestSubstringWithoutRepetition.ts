//https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
    let max = 0
    let substr = '', idx: number
    for (let i=0; i < s.length; i++) {
        idx = substr.indexOf(s[i])
        if (idx >= 0) {
            max = substr.length > max ? substr.length : max;
            substr = substr.slice(idx + 1)
        }
        substr +=s[i];
    }
    max = substr.length > max ? substr.length : max;
    return max;
};