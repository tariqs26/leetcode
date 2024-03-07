function twoSum(nums: number[], target: number): number[] {
  const complementMap: Record<number, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (complementMap[complement] !== undefined)
      return [i, complementMap[complement]]
    complementMap[nums[i]] = i
  }
}
