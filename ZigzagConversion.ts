//https://leetcode.com/problems/zigzag-conversion/

function convert(s: string, numRows: number): string {
    let rows: string[][] = []
    let downward = true
    let row = 0
    for (let i = 0; i < numRows; i++) {
        rows[i] = []
    }
    if (numRows == 1) return s
    for (let i = 0; i < s.length; i++) {
        rows[row].push(s[i])
        if (row == numRows - 1) {
            downward = false
            row -= 1
        } else if (row == 0) {
            downward = true
            row += 1
        } else if (downward) {
            row += 1
        } else if (!downward) {
            row -= 1
        }
    }
    let news = ""
    for (let i = 0; i < rows.length; i++) {
        for (let k = 0; k < rows[i].length; k++) {
            news += rows[i][k]
        }
    }
    return news
}