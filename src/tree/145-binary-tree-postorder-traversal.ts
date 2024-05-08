function postorderTraversal(root: TreeNode | null): number[] {
  const nodes: number[] = []

  function traverse(root: TreeNode | null) {
    if (!root) return
    traverse(root.left)
    traverse(root.right)
    nodes.push(root.val)
  }

  traverse(root)

  return nodes
}
