class ListNode{
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function hasCycle(head) {
  if (head === null || head.next === null) {
    return false; // No loop if list is empty or has only one element
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;         // Move slow pointer by one step
    fast = fast.next.next;    // Move fast pointer by two steps

    if (slow === fast) {      // If they meet, there is a loop
      return true;
    }
  }

  return false; // No loop found
}

let node5 = new ListNode(5);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let head = new ListNode(1, node2);
node5.next = node3;
console.log(hasCycle(head))

