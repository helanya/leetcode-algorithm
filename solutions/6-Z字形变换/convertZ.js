/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  const len = s.length
  if (numRows === 1 || numRows >= len) {
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

const convert2 = (s, numRows) => {
  if (numRows === 1 || numRows >= s.length) {
    return s
  }

  const res = new Array(numRows).fill('')
  const len = s.length
  let loc = 0
  let down = false

  for (let i = 0; i < len; i++) {
    res[loc] += s[i]

    if (loc === 0 || loc === numRows - 1) {
      down = !down
    }

    loc += down ? 1 : -1
  }

  return res.join('')

}