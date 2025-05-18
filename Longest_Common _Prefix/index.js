function longestCommonPrefix(strs){
    if (!strs.lengh) return '';
    let prefix = strs[0]; // Initialize prefix with the first string
    for (let i = 1; i < strs.lengh ; i++){
        while(!strs[i].startsWith(prefix)){
            prefix = prefix.slice(0, -1);
            if (!prefix) return '';
        }
    }
    return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
console.log(longestCommonPrefix(["cat", "car", "cartoon"]));    // Output: "ca"