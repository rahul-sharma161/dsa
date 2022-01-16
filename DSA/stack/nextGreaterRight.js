//To identify that stack is to be used, apply brute force

function Stack() {
  this.s = [];
}
Stack.prototype.push = function (data) {
  this.s.push(data);
};
Stack.prototype.pop = function (data) {
  return this.s.pop(data);
};
Stack.prototype.top = function (data) {
  return this.s[this.s.length - 1];
};
Stack.prototype.empty = function () {
  if (this.s.length === 0) {
    // console.log(this.s)
    return true;
  } else {
    //  console.log("false case",this.s)

    return false;
  }
};

//Function to find the next greater element for each element of the array.
function nextLargerElement(arr, n) {
  // code here
  //need right subarray to get the next biggest, so strting from end to obtain the subarray
  //if stack empty push,
  //else pop till top is greater(no equal since distict arr)
  //if found push in answer
  //else push -1
  let stck = new Stack(),
    ans = [];
  for (let i = n - 1; i >= 0; i--) {
    //console.log(i, stck);
    arr[i] = Number(arr[i]);
    // console.log( stck, arr[i] );
    ans;
    if (stck.empty()) {
      ans.push(-1);
      stck.push(arr[i]);
    } else if (!stck.empty() && stck.top() > arr[i]) {
      console.log("ok");
      ans.push(stck.top());
      stck.push(arr[i]);
    } else {
      while (true) {
        stck.pop();
        ans;
        if (stck.empty()) {
          ans.push(-1);
          stck.push(arr[i]);
          break;
        } else if (!stck.empty() && stck.top() > arr[i]) {
          ans.push(stck.top());
          stck.push(arr[i]);
          break;
        }
      }
    }
  }
  console.log(ans);
  return ans.reverse();
}

nextLargerElement([7, 8, 1, 4], 4);
