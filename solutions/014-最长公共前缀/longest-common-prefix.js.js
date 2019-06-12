// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let len = strs.reduce((preLen, strItem) => {
    return Math.min(preLen, strItem.length)
  }, Number.MAX_VALUE)

  let result = ''

  for (let i = 0; i < len; i++) {
    let tempStr = strs[0][i]
    let s = strs.every((item) => {
      return item[i] === tempStr
    })

    if (!s) break;
    result += tempStr
  }
  
  return result
}