//Function that takes in two arrays as parameters
function merge(array1, array2) {
  //create an empty array to store the lowest number within
  let results = [];
  // assign iterators for the sort
  let i = 0;
  let j = 0;
  // while true, iterate through each index of both arrays
  while (i < array1.length && j < array2.length) {
    // if the number within the first index of the first array is less than the number within the
    //second array then store the first index within the array we created called results
    if (array1[i] < array2[j]) {
      results.push(array1[i]);
      //Now continue to iterate to the next index within the first array and compare that new index with the old one in the
      //second array
      i++;
    } else {
      //if the second index's value is less than the firsts value's index. Then, store the second index's
      //value instead and iterate to the next index to compare.
      results.push(array2[j]);
      j++;
    }
  }
  // If theres no more indexes to compare the first arrays with the second array then push all remaining indexes
  // into the results array
  while (i < array1.length) {
    results.push(array1[i]);
    i++;
  }
  // If theres no more indexes to compare the second arrays with the first array then push all remaining indexes
  // into results 
  while (j < array2.length) {
    results.push(array2[j]);
    j++;
  }
  //return the array in results all sorted
  return results;
}
merge([1, 10, 50], [2, 14, 99, 100]);

//splits an array into two, prepping it for the merge function
function mergeSort(arr) {
  // if the length of the array is less or equal to one
  //then don't do anything, and just return the array as is , this is the base case
  if (arr.length <= 1) return arr;
  // divide the length of the array by two (and then round it) so we can split the array to the middle
  let mid = Math.floor(arr.length / 2);
  // slice one array to the variable that we got from top and have that as our first array
  let left = mergeSort(arr.slice(0, mid));
  // then slice the other half of the array to the variable that we got from top and have that as our second array
  let right = mergeSort(arr.slice(mid));
  console.log(merge(left, right));
  //here is our one array, that was split into two. Insert both of those
  //into to the merge function on line 1 in order to get the new sorted list
  return merge(left, right);
}

mergeSort([10, 25, 76, 73, 73, 1, 9]);
