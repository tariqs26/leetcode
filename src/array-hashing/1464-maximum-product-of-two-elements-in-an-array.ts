function maxProduct(nums: number[]): number {
  let [max, secondMax] = [-Infinity, -Infinity]

  for (let i = 0; i < nums.length; i++)
    if (nums[i] > max) {
      secondMax = max
      max = nums[i]
    } else if (nums[i] > secondMax) secondMax = nums[i]

  return (max - 1) * (secondMax - 1)
}
