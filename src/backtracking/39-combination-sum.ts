function combinationSum(candidates: number[], target: number): number[][] {
  const combs: number[][] = []

  // i: index to start
  // curr: current combination
  // total: current sum
  function dfs(i: number, curr: number[], total: number) {
    // base case
    if (total === target) {
      combs.push([...curr])
      return
    }

    // check bounds
    if (i >= candidates.length || total > target) return

    // include current
    curr.push(candidates[i])
    dfs(i, curr, total + candidates[i])
    // exclude current
    curr.pop()
    dfs(i + 1, curr, total)
  }

  dfs(0, [], 0)

  return combs
}
