class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

let node5 = new ListNode(5);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let head = new ListNode(1, node2);

console.log("Original Linked List:");
printLinkedList(head)

let reversedHead = reverseLinkedList(head);
console.log("Reversed Linked List:");
printLinkedList(reversedHead);

function printLinkedList(head) {
  let current = head;
  let result = ''
  while (current !== null) {
    result += (current.val + " -> ");
    current = current.next;
  }
  result += "null";
  console.log(result)
}
