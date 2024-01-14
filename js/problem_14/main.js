/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestCommonPrefix = '';
    for (let i = 0; i < strs[0].length; i++) {
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