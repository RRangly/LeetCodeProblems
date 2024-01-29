//https://leetcode.com/problems/regular-expression-matching/
function isMatch(s: string, p: string): boolean {
    if (s == p) return true

    let pointer = 0;
    for (let i = 0; i < s.length; i++) {
        if (p[pointer] == "*") {
            if (p[pointer+1] == s[i]) {
                pointer += 2
                continue
            }
            if (p[pointer-1] == "." || p[pointer-1] == s[i]) {
                continue
            }
            pointer++
        }
        if (p[pointer] == ".") {
            pointer++
            continue
        }
        if (p[pointer] == s[i]) {
            pointer++
            continue
        }
        return false
    }
    if (pointer < (p.length - 1)) {
        return false
    }
    return true
};