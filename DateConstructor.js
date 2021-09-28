
//These functions take a date, arrange it by Year/Month/Day, and return it as a flat number (e.g. 11/07/2022 becomes 20220711). Later dates are always a larger number than earlier dates, meaning you can use this function to do things such as checking if a date falls in a particular range.

//---Ver. 1: Hyphenated year-month-day string parameter---
const dateConstructor = (date) => {
    var array = date.split("-");
    var dateNumber = Number(array[0] + array[1] + array[2]);
    return dateNumber;
}

//---Ver. 2: Individual day/month/year parameters (can be strings or numbers)---
const dateConstructor2 = (day, month, year) => {
    //add 0s if absent (05, 01)
    const lengthCheck = (string, length) => {
        while (String(string).length < length){
            string = "0" + string;
        }
        return String(string);
    }
    //construct number
    var yearNumber = lengthCheck(year, 4);
    var monthNumber = lengthCheck(month, 2);
    var dayNumber = lengthCheck(day, 2);
    var dateNumber = Number(yearNumber + monthNumber + dayNumber);
    return dateNumber;
}

//---Sample outputs---
console.log(dateConstructor("2002-05-11"));
console.log(dateConstructor2("11", "5", "2002"));
console.log(dateConstructor2("1", "5", "2002"));
console.log(dateConstructor2(1, 5, 2002));
console.log(dateConstructor2(11, 12, 2002));