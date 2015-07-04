var currentDate = new Date();
document.write("Unaltered date: " + currentDate);
document.write("<br/>");

var day = currentDate.getDate();
var month = currentDate.getMonth()+1;
var year = currentDate.getFullYear();


document.write("Altered date: ");
document.write("<br/>");
document.write(day + " / " + month + " / " + year);

// Displaying date without using variables
document.write('<br>', new Date().getDate(), '.', new Date().getMonth() + 1, '.', new Date().getFullYear())
