/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  const len = s.length
  if (numRows=== 1 || numRows >= len) {
    return s
  }

  const mat = new Array(numRows).fill('')

  let x = 0
  let y = 0
  const oneLoopNum = numRows * 2 - 2
  for (let i = 0; i < len; i++ ) {
    mat[x] += s[i]
    if ( i % oneLoopNum < numRows - 1) {
      x++
    } else {
      x--
      y++
    }
  }
  return mat.join('')
}

// P   A   H   N
// A P L S I I G
// Y   I   R
