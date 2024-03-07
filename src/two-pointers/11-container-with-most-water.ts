function maxArea(height: number[]): number {
  let [lp, rp] = [0, height.length - 1]

  let maxArea = 0

  while (lp < rp) {
    maxArea = Math.max(maxArea, (rp - lp) * Math.min(height[lp], height[rp]))
    if (height[lp] >= height[rp]) rp--
    else lp++
  }

  return maxArea
}
