/*
    Approach 1:
    - hashSet to keep track of visited nodes
    - Time O(n)
    - Space O(n)
*/
function hasCycle(head: ListNode | null): boolean {
  const seen = new Set<ListNode>()

  while (head) {
    if (seen.has(head)) return true
    seen.add(head)
    head = head.next
  }

  return false
}

/*
    Approach 2:
    - slow/fast pointer
    - Time O(n)
    - Space O(1)

*/
function hasCycle2(head: ListNode | null): boolean {
  let [fast, slow] = [head, head]

  while (fast && fast.next && slow) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) return true
  }

  return false
}
