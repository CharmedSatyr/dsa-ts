# Insertion Sort

## Approach & Efficiency

- This function loops through the array twice. The outer loop iterates from the second element. It assigns the inner loop's starting point to the beginning of the array and takes the value of the second element. The inner loop checks the value of the array at the outer loop index and moves it left in the array while it's less than the array value at the inner loop index.

In other words, the array is investigated item by item, and if the last item is smaller than the item before, it's moved left until it's not.

This solution has a Big O notation efficiency of O(n^2) for time and O(1) for space.
