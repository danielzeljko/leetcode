/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // improved
  // bypasses the need for string reversing
  let nums1 = [];
  let nums2 = [];

  while (l1 !== null) {
    nums1.unshift(l1.val);
    l1 = l1.next;
  }

  while (l2 !== null) {
    nums2.unshift(l2.val);
    l2 = l2.next;
  }

  const numStr1 = nums1.join('');
  const numStr2 = nums2.join('');

  const summedStr = BigInt(numStr1) + BigInt(numStr2);

  let resultStr = String(summedStr);
  const dummy = new ListNode();
  let currentNode = dummy;

  for (let i = resultStr.length - 1; i >= 0; i--) {
    const newNode = new ListNode(parseInt(resultStr[i]), null);
    currentNode.next = newNode;
    currentNode = currentNode.next;
  }

  return dummy.next;

  // works original
  // let seenl = "";
  // let seen2 = "";

  // while (l1 !== null) {
  //   seenl += l1.val;
  //   l1 = l1.next;
  // }

  // while (l2 !== null) {
  //   seen2 += l2.val;
  //   l2 = l2.next;
  // }

  // const reversedStr1 = reverseString(seenl);
  // const reversedStr2 = reverseString(seen2);
  // const summedStr = BigInt(reversedStr1) + BigInt(reversedStr2);
  // const reversedSum = reverseString(String(summedStr));

  // const dummy = new ListNode();
  // let currentNode = dummy;

  // for (const char of reversedSum) {
  //   const newNode = new ListNode(parseInt(char), null);
  //   currentNode.next = newNode;
  //   currentNode = currentNode.next;
  // }

  // return dummy.next;
};

function reverseString(str) {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }
  return temp;
}