/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  const len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    }
    digits[i] = 0
  }

  return [1, ...digits]
}