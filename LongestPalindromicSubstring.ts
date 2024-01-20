function expand(s: string, idx1: number, idx2: number): number[] {
    let max = [0, 0]
    while (idx1 >= 0 && idx2 <= s.length) {
        if (s[idx1] == s[idx2]) {
            max = idx2 - idx1 > max[1] - max[0] ? [idx1, idx2] : max;
            idx1 -= 1; idx2 += 1
        } else {
            break
        }
    }
    return max
}

function longestPalindrome(s: string): string {
    let max = [0, 0]
    for (let i = 0; i < s.length; i++) {
        const odd = expand(s, i, i)
        const even = expand(s, i, i + 1)
        if (odd[1] - odd[0] > max[1] - max[0]) {
            max = odd
        }
        if (even[1] - even[0] > max[1] - max[0]) {
            max = even
        }
    }
    return s.slice(max[0], max[1] + 1);
};