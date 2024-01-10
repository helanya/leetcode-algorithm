/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  for (let index = digits.length - 1; index >= 0; index--) {
    if (digits[index] < 9) {
      digits[index]++
      return digits
    }
    digits[index] = 0
  }

  if (digits[0] === 0) {
    digits.unshift(1)
  }
  return digits
}