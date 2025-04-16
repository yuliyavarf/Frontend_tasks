function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

var mergeTwoLists = function(list1, list2) {
    let nulaHead = new ListNode(0);
    let current = nulaHead;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    if (list1 !== null) {
        current.next = list1;
    }

    if (list2 !== null) {
        current.next = list2;
    }
    return nulaHead.next;
};

// const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// const mergedList = mergeTwoLists(list1, list2);

// function printList(node) {
//     let current = node;
//     while (current !== null) {
//         process.stdout.write(current.value + " -> ");
//         current = current.next;
//     }
//     console.log("null");
// }

// printList(mergedList); //1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null
