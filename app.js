function reverseStr(str){
    var reversedStr = str.split('').reverse().join('');
    return reversedStr;
}

function isPalindrome(str){
    var reversedStr = reverseStr(str);
    return (reversedStr == str);
}