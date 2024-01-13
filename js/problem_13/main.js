/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbol = ["I", "V", "X", "L", "C", "D", "M"];
    let value = [1, 5, 10, 50, 100, 500, 1000];
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = value[symbol.indexOf(s[i])];
        const nextValue = value[symbol.indexOf(s[i + 1])];
        if (nextValue > currentValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }

    return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));