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

function getAllDateFormats(date){
    var dateStr = convertDateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}


function checkIsPalindromeForAllDateFormats(date){
    var allDateFormats = getAllDateFormats(date);
    var flag = false;

    for(var i = 0; i < allDateFormats.length; i++){
        if(isPalindrome(allDateFormats[i])){
            flag = true;
            break;
        }
    }
    return flag;
}

function isLeapYear(year){
    if(year % 400 == 0){
        return true;
    }
    if(year % 4 == 0){
        return true
    }
    if(year % 100 == 0){
        return false;
    }
    return false;
}

function getNextDay(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month != 2){
        if(day > daysInMonth[month - 1]){
            day = 1;
            month++;
        }
        if(month > 12){
            month = 1;
            year++;
        }
    }
    else{
        if(isLeapYear(year)){
            if(day > 29){
                day = 1;
                month++
            }
        }
        else {
            if(day > 28){
                day = 1;
                month++;
            }
        }
    }

    return {
        day : day,
        month : month,
        year : year
    };

}

function getNextPalindrome(date){
    var counter = 0;
    var nextDate = getNextDay(date);

    while(1){
        counter++;
        var isPalindrome = checkIsPalindromeForAllDateFormats(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate = getNextDay(nextDate);
    }
    return [counter, nextDate];
}
