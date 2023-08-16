/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // const visited = [];

  // while (head !== null) {
  //   visited.push(head);
  //   head = head.next;
  // }

  // if (visited.length === 0) return null;

  // const newHead = visited.pop();
  // let currNode = newHead;

  // while (visited.length !== 0) {
  //   const nextNode = visited.pop();
  //   nextNode.next = null;
  //   currNode.next = nextNode;
  //   currNode = nextNode;
  // }

  // return newHead;

  let prev = null;
  let curr = head;

  while (curr !== null) {
    const nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;

};