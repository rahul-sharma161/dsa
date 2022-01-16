// In JS default push pop act as stack operation

//arr[--count], arr[count-1]
class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  push(item) {
    //this.data.push(item);
    this.data[this.length++] = item;
    console.log(
      `pushed ${item} at position ${this.length},stack now is ${this.data}`
    );
    // this.length += 1;
  }
  pop() {
    // let poppedItem = this.data[this.length - 1];

    //return this.data[--this.length];
    this.length--;
    let popped = this.data.pop();
    console.log("popping  item .....", popped);
    return popped;
  }
  peek() {
    console.log("found", this.data[this.length - 1], "on peeeking");
    return this.data[this.length - 1];
  }
  items() {
    console.log("elements:-", this.data, "length =", this.length);
  }
  isEmpty() {
    return this.data === [];
  }
}
// class Stack {
//   constructor() {
//     this.data = [];
//     this.length = 0;
//   }
//   push(item) {
//     //this.data.push(item);
//     this.data[this.length++] = item;
//     console.log(
//       `pushed ${item} at position ${this.length},stack now is ${this.data}`
//     );
//     // this.length += 1;
//   }
//   pop() {
//     // let poppedItem = this.data[this.length - 1];

//     //return this.data[--this.length];
//     this.length--;
//     let popped = this.data.pop();
//     console.log("popping  item .....", popped);
//     return popped;
//   }
//   peek() {
//     console.log("found", this.data[this.length - 1], "on peeeking");
//     return this.data[this.length - 1];
//   }
//   items() {
//     console.log("elements:-", this.data, "length =", this.length);
//   }
// }
let h2 = new Stack();
let h1 = new Stack();
let h3 = new Stack();

let s1 = [3, 2, 1, 1, 1, 1];
let s2 = [4, 3, 2];
let s3 = [1, 1, 4, 1, 2];
for (let i = 0; i < s1.length; i++) {
  h1.push(s1[i]);
}
for (let i = 0; i < s2.length; i++) {
  h2.push(s2[i]);
}
for (let i = 0; i < s3.length; i++) {
  h3.push(s3[i]);
}
console.log("=============================================");
console.log(h1);
console.log(h2);
console.log(h3);
console.log("=============================================");

//get the least value while getting all as well
//for the higher value pop

function equalStacks(h1, h2, h3) {
  // Write your code here
  h1;

  let sum1 = getSum(h1.data, h1.length);
  let sum2 = getSum(h2.data, h2.length);
  let sum3 = getSum(h3.data, h3.length);
  let currLargest =
    sum1 < sum2 ? (sum1 < sum3 ? sum1 : sum3) : sum2 < sum3 ? sum2 : sum3;
  h1;
  return main(h1, h2, h3, currLargest);
  /**
   * 1.Prepare sum and stack object, smallest sum=CL
   *
   * 2.main(s1,s2,s3,CL)
   *  2.1if all 3 equal return the sum
   *  2.2 if 2 equal and 3rd greater->reduce 3 while it is lesser or equal to 1 and 2=>if equal return sum else goto 2.3
   *
   *  2.3 if 2 equal and third smaller->reduce 1st while less or equal 3rd =>if equal make CL =1 else CL=1
   *                                     reduce 2nd while less or equal largest =>if equal make CL=2 else CL=2
   *   call main(s1,s2,s3,CL)
   *  2.4 implies all are diff
   *  iterate through obj-> if  not CL reduce while less or equal to CL=> CL=iterating sum
   *
   * main(s1,s2,s3,CL)
   *
   *
   */
}

// // function main(h1, h2, h3, CL) {
// //   let sum1 = getSum(h1.data, h1.length);
// //   let sum2 = getSum(h2.data, h2.length);
// //   let sum3 = getSum(h3.data, h3.length);
// //   if (sum1 == sum2 && sum1 == sum3) {
// //     return sum3;
// //   } else if((sum1==sum2&& sum1>sum3)) {
// //       while()
// //   }
// //   // if(sum1==sum2){

// //   // }
// }

// function getSum(h1, length) {
//   let sum = 0;

//   for (let itr = 0; itr < length; itr++) {
//     sum = sum + h1[itr];
//   }
//   sum;
//   return sum;
// }

// console.log(equalStacks(h1, h2, h3));
