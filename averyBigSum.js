/**
 * Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements

Sample Input
5
1000000001 1000000002 1000000003 1000000004 1000000005

Output
5000000015
 */
function aVeryBigSum(ar) {
  let sum = 0;
  ar.forEach((element) => {
    sum += element;
  });
  console.log(sum);
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
