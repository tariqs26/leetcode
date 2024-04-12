function isValidBST(root: TreeNode | null): boolean {
  return validate(root, -Infinity, Infinity)
}

function validate(root: TreeNode | null, min: number, max: number): boolean {
  if (root === null) return true

  if (root.val >= max || root.val <= min) return false

  return (
    validate(root.left, min, root.val) && validate(root.right, root.val, max)
  )
}
