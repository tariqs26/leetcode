function stoneGameVI(aliceValues: number[], bobValues: number[]): number {
  const values: [number, number, number][] = []

  for (let i = 0; i < aliceValues.length; i++)
    values[i] = [aliceValues[i] + bobValues[i], aliceValues[i], bobValues[i]]

  let [aliceCount, bobCount] = [0, 0]

  values
    .sort((a, b) => b[0] - a[0])
    .forEach((curr, i) => {
      if (i % 2 == 0) aliceCount += curr[1]
      else bobCount += curr[2]
    })

  return aliceCount === bobCount ? 0 : aliceCount > bobCount ? 1 : -1
}
