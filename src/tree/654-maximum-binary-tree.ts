function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) return null

  let maxIndex = 0
  for (let i = 1; i < nums.length; i++)
    if (nums[i] > nums[maxIndex]) maxIndex = i

  return {
    val: nums[maxIndex],
    left: constructMaximumBinaryTree(nums.slice(0, maxIndex)),
    right: constructMaximumBinaryTree(nums.slice(maxIndex + 1)),
  }
}
