var a = 5;
var b = 6;
var c = 7;
var p = (a + b + c)/2; //half perimeter
var area =  Math.sqrt(p*((p-a)*(p-b)*(p-c)));
document.write(area);