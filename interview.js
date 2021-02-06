let b = 3, 
    d = b,    //this means d = 3
    u = b;    //this means u = 3

const tree = ((((++d) * d) *b) * (b++)) + 
(+ (--d)) + (+ (+(b--))) + 
(+ (+((d*b) + (+u))))

const treeA = ((((++d) * d) *b) * (b++))
// b = 3
// d = 4
((4 * d) * b) * (b++) // we know d = 4, so 4 * 4 = 16:
(16 * b) * (b++) // we know b = 3, so 16 * 3 = 48
48 * (b++) // we know that b++ = 3 
48 * 3 //  after multiplying: b = 4, this is because b++ is giving us the value of b pre-incremented (b = 3)
// 48 * 3 = 144

const treeA = 144;

let b = 4, d = 4, u = 3;
// b = 4
// d = 4
const treeB = (+ (--d)) + (+ (+(b--)));
  // 3 + 4
  
// unary operators aren't doing anything, if we cancel them out we get:
const treeB = 3 + 4
// b = 3
// d = 3

let b = 3, d = 3, u = 3;

const treeA = 144;
const treeB = 7;

const treeC = (+ (+((d*b) + (+u))));
// start by clearing unary operators:

const treeC = (+ (+ ((d*b) + u )))
// mind your brackets:

const treeC = (d*b) + u;
const treeC = (3 * 3) + 3;
const treeC = 9 + 3;
const treeC = 12

// FINAL ANSWER!
 treeA = 144;
 treeB = 7;
 treeC = 12;
const tree = treeA + treeB + treeC;

const tree = 144 + 7 + 12;

const tree = 163;

// Initial thought:
// 4 * 9 * 4 + 2 + 2 + 9 + 3

