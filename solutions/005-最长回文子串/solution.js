
// Start of Selection
// 给你一个字符串 s，找到 s 中最长的 
// 回文

// 子串
// 。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成

/**
 * @param {string} s
 * @return {string}
 */

// 中心扩散法
var longestPalindrome = function (s) {
  const len = s.length
  if (len < 2) return s;


  let start = 0
  let maxLen = 1

  function expandAroundCenter(left, right) {
    while (left >=0 && right < len && s[left] === s[right]) {
      let tempLen = right - left + 1
      if (tempLen > maxLen) {
        maxLen = tempLen
        start = left
      }
      left--
      right++
    }
  }

  for (let i = 0; i < len; i++) {
    expandAroundCenter(i, i)
    expandAroundCenter(i, i + 1)
  }
  return s.substring(start, start + maxLen)
};

// 动态规划
var longestPalindrome2 = function (s) {
    const len = s.length;
    if (len < 2) return s;

    // 规划表
    const dp = Array.from({ length: len }, () => new Array(len).fill(false));

    // 所有长度为1的子串都是回文
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    let start = 0;
    let maxLen = 1;

    for (let j = 1; j <= len; j++) {
        for (let i = 0; i < j; i++) {
          if (s[i] !== s[j]) {
            dp[i][j] = false
          } else {
            if (j - i < 3) {
              dp[i][j] = true
            } else {
              dp[i][j] = dp[i + 1][j - 1]
            }
          }

          let tempLen = j - i + 1
          if (dp[i][j] && tempLen > maxLen) {
            maxLen = tempLen
            start = i
          }
        }
    }

    return s.substring(start, start + maxLen);
};
