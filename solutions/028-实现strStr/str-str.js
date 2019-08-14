// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 示例 1:

// 输入: haystack = "hello", needle = "ll"
// 输出: 2
// 示例 2:

// 输入: haystack = "aaaaa", needle = "bba"
// 输出: -1
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  // return haystack.indexOf(needle)
  if (needle === '') return 0

  for (let i = 0; i < haystack.length; i++) {

    if (haystack[i] === needle[0]) {
      let flag = false

      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          flag = true
          break
        }
      }

      if (!flag) return i
    }
  }

  return -1
};