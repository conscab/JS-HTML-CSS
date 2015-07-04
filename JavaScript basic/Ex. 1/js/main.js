var currentDate = new Date();
var currentDay = currentDate.getDay();

// Optimize this using array
switch(currentDay){
    case 0:
        document.write("Today is Sunday");
        break;
    case 1:
        document.write("Today is Monday");
        break;
    case 2:
        document.write("Today is Tuesday");
        break;
    case 3:
        document.write("Today is Wednesday");
        break;
    case 4:
        document.write("Today is Thursday");
        break;
    case 5:
        document.write("Today is Friday");
        break;
    case 6:
        document.write("Today is Saturday");
       break;
}
document.write("<br>");
// Change getHours mettod to display in AM/PM style
// Make sure the hours, minutes and seconds display in a XX format instead of X (for example 02 minutes instead of 2)
document.write("Current time is:" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
