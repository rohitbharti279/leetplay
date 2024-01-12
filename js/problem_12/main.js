/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const numeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numeralSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let result = '';
    for (let i = 0; i < numeralValues.length; i++) {
        while (num >= numeralValues[i]) {
            result += numeralSymbols[i];
            num -= numeralValues[i];
        }
    }

    return result;

    
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));