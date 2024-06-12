function compress(chars: string[]): number {
  const n = chars.length
  for (let [i, count] = [0, 1]; i < n; i++, count++)
    if (i === n - 1 || chars[i] != chars[i + 1]) {
      chars.push(chars[i])
      if (count > 1) {
        for (const digit of count.toString()) chars.push(digit)
      }
      count = 0
    }
  return chars.splice(0, n).length
}
