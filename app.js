function reverseStr(str){
    var reversedStr = str.split('').reverse().join('');
    return reversedStr;
}

function isPalindrome(str){
    var reversedStr = reverseStr(str);
    return (reversedStr == str);
}

function convertDateToString(date){
    var dateStr = {day: "", month: "", year: ""};
    if(date.day < 10){
        dateStr.day = "0" + date.day;
    }
    else{
        dateStr.day = date.day.toString();
    }
    if(date.month < 10){
        dateStr.month = "0" + date.month;
    }
    else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}