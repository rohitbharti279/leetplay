/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maximumArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const heightOfContainer = Math.min(height[left], height[right]);
    const width = right - left;
    const area = heightOfContainer * width;

    maximumArea = Math.max(maximumArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maximumArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

console.log(maxArea([1, 1]));
