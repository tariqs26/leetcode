function lengthOfLongestSubstring(s: string): number {
  let max = 0
  let run_total = ""
  for (const str of s) {
    while (run_total.includes(str)) run_total = run_total.slice(1)
    run_total += str
    max = Math.max(run_total.length, max)
  }
  return max
}
