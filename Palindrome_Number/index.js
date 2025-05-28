// Simple Idea (with strings)
function isPalindrome(x) {
    if(x < 0) return false;
    let str = x.toString();
    let reversed = str.split('').reverse().join('')
    return str === reversed;
}


const isPalindrome = function(x){
    if(x < 0 || (x % 10 === 0 && x !== 0)){
        return false
    }

    const reversed = 0
    const original = x

    while(x > 0){
        let digit = x % 10
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10)
    }
    return original === reversed
}