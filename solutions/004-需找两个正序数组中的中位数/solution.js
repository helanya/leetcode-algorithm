// Start of Selection
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。
// 示例 1：

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 提示：

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 10^6


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length; //第一个
    const n = nums2.length; // 第二个
    
    const leftTotal = Math.floor((m + n + 1) / 2) // 分割左边元素个数

    let left = 0
    let right = m

    // 整体思路： 以第一个数组去二分，用 leftTotal 分割第二个数组
    // 定义 i、j 分割线位置
    // i: 第一个数组右边第一个数组的下标 == 第一个数组左边个数
    // j：第二个数组右边第一个数组下标 == 第二个数组左边个数
    // (左边个数 + 右边个数) == Math.floor((m + n + 1) / 2) === leftTotal
    // 需满足条件
    // 
    // nums1[i - 1] <= nums2[j] &&  nums2[j - 1] <= nums1[i]
    while (left < right) {
      let i = left + Math.floor((right - left + 1) / 2)
      let j = leftTotal - i
      if (nums1[i - 1] > nums2[j]) { // 分割线左边元素大于分割线右边元素
        right = i - 1
      } else {
        left = i
      }
    }
    
    let i = left
    let j =  leftTotal - i

    let num1LeftMax = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1]
    let num1RightMin = i === m ? Number.MAX_SAFE_INTEGER : nums1[i]
    let num2LeftMax = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
    let num2RightMin = j === n ? Number.MAX_SAFE_INTEGER : nums2[j];

    let leftMax = Math.max(num1LeftMax, num2LeftMax);
    let rightMin = Math.min(num1RightMin, num2RightMin);

    if ((m + n) % 2 === 0) {
        return (leftMax + rightMin) / 2;
    } else {
        return leftMax;
    }
};