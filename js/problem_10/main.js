var isMatch = function(s, p) {
    if (p === "") {
        return s === "";
    }

    const firstMatch = s !== "" && (s[0] === p[0] || p[0] === '.');

    if (p.length >= 2 && p[1] === '*') {
        return (isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p)));
    } else {
        return firstMatch && isMatch(s.substring(1), p.substring(1));
    }
};

console.log(isMatch("aa", "a")); 
console.log(isMatch("aa", "a*"));  
console.log(isMatch("ab", ".*"));  
