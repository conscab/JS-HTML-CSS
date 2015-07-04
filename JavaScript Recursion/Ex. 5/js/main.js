function power(nr, exp)
{
    while(i <= exp)
    {
        total = total*nr;
        i++;
        return power(nr,exp);
    }

console.log(total);
}
var i = 1;
var total = 1;
power(75,3);

