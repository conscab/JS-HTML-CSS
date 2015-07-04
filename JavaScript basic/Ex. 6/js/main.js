var input = prompt("What year?");
document.write(input);

if(input % 4 == 0)
{
    if((input % 100 == 0 ) && (input % 400 == 0 ))
        document.write(" YES");

    else
        if(input % 100 == 0)
            document.write(" NOT");
        else
            document.write(" YES");

}
else
    document.write(" NOT");



//online version:
//
//    year = window.prompt("Input a Year : ");
//x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
//alert(x);