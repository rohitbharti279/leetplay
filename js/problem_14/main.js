/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestCommonPrefix = '';
    let smallestString = strs.sort((a, b) => a.length - b.length);
    for (let i = 0; i < smallestString[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i]!== strs[0][i]) {
                return longestCommonPrefix;
            }
        }
        longestCommonPrefix += strs[0][i];
    }
    return(longestCommonPrefix);
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([""]));