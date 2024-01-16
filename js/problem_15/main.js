/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    if (!output.some(arr => arr.every((val, index) => val === triplet[index]))) {
                        output.push(triplet);
                    }
                }
            }
        }
    }
    return output;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0,1,1]));
// console.log(threeSum([0,0,0]));