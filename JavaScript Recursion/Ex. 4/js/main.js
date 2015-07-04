function sum(array)
{
    while(i<array.length)
    {
        total += array[i];
        i++;
        sum(array);
    }
    return total;
}
var i = 0;
var total = 0;

console.log(sum([45, 4500, 90000]));