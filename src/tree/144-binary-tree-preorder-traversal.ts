function preorderTraversal(root: TreeNode | null): number[] {
  const nodes: number[] = []

  function traverse(root: TreeNode | null) {
    if (!root) return
    nodes.push(root.val)
    traverse(root.left)
    traverse(root.right)
  }

  traverse(root)

  return nodes
}
