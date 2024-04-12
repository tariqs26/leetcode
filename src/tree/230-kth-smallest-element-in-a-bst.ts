function kthSmallest(root: TreeNode | null, k: number): number {
  const values: number[] = []

  function traverse(node: TreeNode | null) {
    if (node) {
      traverse(node.left)
      values.push(node.val)
      traverse(node.right)
    }
  }

  traverse(root)

  return values[k - 1]
}
