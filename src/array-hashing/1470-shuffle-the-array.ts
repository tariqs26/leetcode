function shuffle(nums: number[], n: number): number[] {
  let i = 0
  let j = n
  const shuffled: number[] = []

  while (i < j) shuffled.push(nums[i++], nums[j++])

  return shuffled
}
