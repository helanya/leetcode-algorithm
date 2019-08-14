// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function(s) {
   let size = 0 // 最大长度
   let str = '' // 不重复的字符串

   for (let i = 0; i < s.length; i++) {
    let index = str.indexOf(s[i]) // 当前字符的索引

    if (index === -1) {
      str += s[i]
      size = Math.max(str.length, size)
    } else {
      str = str.substr(index + 1) + s[i]  // 重复了，截取重复后面的str
    }
   }

   return size
};