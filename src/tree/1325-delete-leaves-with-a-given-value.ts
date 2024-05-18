function removeLeafNodes(
  root: TreeNode | null,
  target: number
): TreeNode | null {
  if (root === null) return null

  if (root.left) root.left = removeLeafNodes(root.left, target)

  if (root.right) root.right = removeLeafNodes(root.right, target)

  if (root.left === null && root.right === null && root.val === target)
    return null

  return root
}
