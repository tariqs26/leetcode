function maximizeSum(nums: number[], k: number): number {
  let max = nums.reduce((acc, curr) => Math.max(acc, curr), -Infinity)

  let score = 0
  for (let i = 0; i < k; i++) {
    score += max
    max++
  }

  return score
}
