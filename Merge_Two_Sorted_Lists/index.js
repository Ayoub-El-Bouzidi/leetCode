/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 
 */
var mergeTwoLists = function(list1, list2) {
    const merged = [];
    let i = 0;
    let j = 0;
    while(i < list1.length && j < list2.length){
        if(list1[i] < list2[j]){
            merged.push(list1[i]);
            i++
        }else{
            merged.push(list2[j]);
            j++
        }
    }

    while(i < list1.length){
        merged.push(list1[i])
        i++
    }
    while(j < list2.length){
        merged.push(list1[j])
        j++
    }
    return merged;
};
const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));