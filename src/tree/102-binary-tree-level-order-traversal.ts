function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []
  traverse(root, result)
  return result
}

function traverse(
  root: TreeNode | null,
  result: number[][],
  level: number = 0
) {
  if (root === null) return

  if (result[level] === undefined) result[level] = [root.val]
  else result[level].push(root.val)

  traverse(root.left, result, level + 1)
  traverse(root.right, result, level + 1)
}
