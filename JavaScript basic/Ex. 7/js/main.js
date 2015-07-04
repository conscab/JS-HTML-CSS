//
//
//
// I want to see your own solution!!!
//
//
//

//var firstDate = new Date(2014, 1, 1);
//var lastDate = new Date(2040, 12, 31);
//document.write(typeof firstDate);
//document.write("<br/>");
//document.write(typeof lastDate);
//document.write("<br/>");
//
//var i = new Date(1388589603);
//document.write(i);
//values of 1st jan 2014 and 31st dec 2050
//for(var i = 1388534400; i <= 2556057600; i++ )
//{

    //var scannedDate = new Date(i);
    //
    //if (scannedDate.getMonth() == 0 && scannedDate.getDay() == 0 )
    //    document.write(scannedDate);

for (var year = 2014; year <= 2050; year++)
{
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        document.write("1st January is being a Sunday  "+year);
        document.write("<br/>");
}
//aha  !

//
//
//
// I want to see your own solution!!!
//
//
//
