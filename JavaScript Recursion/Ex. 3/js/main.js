var range = function(start_num, end_num)
{
    var count = start_num;
    while(count < end_num-1)
    {
        count++;
        console.log(count);
        return range(count, end_num);

    }




};

console.log(range(5,15));










//var range = function(start_num, end_num)
//{
//    if (end_num - start_num === 2)
//    {
//        return [start_num + 1];
//    }
//    else
//    {
//        var list = range(start_num, end_num - 1);
//        list.push(end_num - 1);
//        return list;
//    }
//};
//
//document.write(range(568,600));
