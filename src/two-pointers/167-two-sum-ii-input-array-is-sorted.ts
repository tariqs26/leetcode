function twoSum(numbers: number[], target: number) {
  let lp = 0
  let rp = numbers.length - 1
  while (lp < rp) {
    const sum = numbers[lp] + numbers[rp]
    if (sum === target) return [lp + 1, rp + 1]
    if (sum < target) lp++
    else rp--
  }
}
