
const BinarySearchTree = require('./bst');


function main(){
  let bst = new BinarySearchTree();
  bst.insert(3);
  bst.insert(1);
  bst.insert(4);
  bst.insert(6);
  bst.insert(9);
  bst.insert(2);
  bst.insert(5);
  bst.insert(7);
  console.log(bst);
  console.log('Depth: ', bst.findDepth());
  
  // bst.right.right.key = 0;
  console.log('isBST: ', bst.isBst());

  console.log('Third largest: ', bst.thirdLargest());
  bst.insert(12);
  console.log('Third largest: ', bst.thirdLargest());
  bst.insert(11);
  // bst.insert(15);
  console.log('Third largest: ', bst.thirdLargest());

  console.log('Is Balanced: ', bst.isBalanced());

  let bst2 = new BinarySearchTree();

  bst2.insert(10);
  bst2.insert(5);
  bst2.insert(3); 
  bst2.insert(7);
  bst2.insert(15);
  bst2.insert(13);
  bst2.insert(17);
  console.log('Is bst2 Balanced: ', bst2.isBalanced());
  bst2.insert(20);
  console.log('Is bst2 Balanced: ', bst2.isBalanced());
  bst2.insert(22);
  console.log('Is bst2 Balanced: ', bst2.isBalanced());
}

main();