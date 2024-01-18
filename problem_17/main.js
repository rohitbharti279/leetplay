/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    const obj = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }
    
    const queue = [""];

    for (let digit of digits) {
        const letters = obj[digit];
        const queueLength = queue.length;

        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift();

            for(const letter of letters) {
                queue.push(current + letter);
            }
        }
    }
    return queue;
  };
  
  console.log(letterCombinations("23"));
  console.log(letterCombinations(""));
  console.log(letterCombinations("2"));