class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const middleELement = (head) => {
  if (head === null || head.next === null) {
    return false; // No loop if list is empty or has only one element
  }

  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow.val
}
const node1 = new Node(1)
const node2 = new Node(2, node1)
const node3 = new Node(3, node2)
const node4 = new Node(4, node3)
const node5 = new Node(5, node4)
const node6 = new Node(6, node5)
const node7 = new Node(7, node6)



console.log(middleELement(node7));