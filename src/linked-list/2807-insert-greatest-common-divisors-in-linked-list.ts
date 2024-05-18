const gcd = (a: number, b: number): number => (!b ? a : gcd(b, a % b))

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let curr = head
  while (curr?.next) {
    const newNode = { val: gcd(curr.val, curr.next.val), next: curr.next }
    curr.next = newNode
    curr = curr.next.next
  }

  return head
}
