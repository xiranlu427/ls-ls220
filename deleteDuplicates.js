/*
Given the head of a sorted singly linked list, eliminate any duplicate
 elements, ensuring each value in the list is unique. The resulting linked
  list must remain sorted. Modify the linked list and return the head of the
   revised, duplicate-free list.
*/

function deleteDuplicates(head) {
  if (!head) {
    return head;
  }

  let curr = head.next;
  let prev = head;

  while (curr !== null) {
    if (curr.val === prev.val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next
    }
  }

  return head;
}

// LS solution using one variable 
function deleteDuplicates(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null'; // Indicate the end of the list
  console.log(listStr);
}

let list1 = createLinkedList([1, 1, 2]);
let list2 = createLinkedList([1, 1, 2, 3, 3]);
let list3 = createLinkedList([1, 2, 3, 3, 4]);
let list4 = createLinkedList([2, 2, 2, 3, 3]);
let list5 = createLinkedList([5]);
let list6 = createLinkedList([1, 1, 1, 2]);

printLinkedList(deleteDuplicates(list1)); // Expected: "1 -> 2 -> null"
printLinkedList(deleteDuplicates(list2)); // Expected: "1 -> 2 -> 3 -> null"
printLinkedList(deleteDuplicates(list3)); // Expected: "1 -> 2 -> 3 -> 4 -> null"
printLinkedList(deleteDuplicates(list4)); // Expected: "2 -> 3 -> null"
printLinkedList(deleteDuplicates(list5)); // Expected: "5 -> null"
printLinkedList(deleteDuplicates(list6));