function topKFrequent(nums: number[], k: number): number[] {
  const scores: Record<number, number> = {}

  nums.forEach((num) => {
    scores[num] = (scores[num] ?? 0) + 1
  })

  return Object.entries(scores)
    .sort(([_, scoreA], [__, scoreB]) => scoreB - scoreA)
    .map(([num]) => Number(num))
    .slice(0, k)
}
