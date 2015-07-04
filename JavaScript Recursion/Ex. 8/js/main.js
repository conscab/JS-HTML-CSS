array = [1,2,3,5,23,56,89, 103, 203, 222];
console.log(array);
key = 2;

function recBinarySrc(array,a,b)
{
    mid = array.indexOf(array[(array.length/2 | 0)]);
    console.log("subarray to search:" + array);
    console.log("mid index is now at position: " + mid);

    do{
     if(array[mid] == key)
     {
         console.log("number " + key + " found on index " + mid + " of new array.");
         return;
     }
     else
        if(array[mid] < key)
        {
        a = mid + 1;
        b = array.length;
        array = array.slice(mid+1, array.length);
        }
        else
            if (array[mid] > key)
            {
                a = array[0];
                b = mid-1;
                array = array.slice(0,mid);
            }
            else
                return console.log("Number not found.");

    array = recBinarySrc(array,a,b);
    }
    while(array.length >= 1)
}

recBinarySrc(array,key);

//recursive, online version
//Array.prototype.br_search = function (target)
//{
//    var half = parseInt(this.length / 2);
//    if (target === this[half])
//    {
//        return half;
//    }
//    if (target > this[half])
//    {
//        return half + this.slice(half,this.length).br_search(target);
//    }
//    else
//    {
//        return this.slice(0, half).br_search(target);
//    }
//};
//
//l= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,23,24,25];
//
//document.write(l.br_search(10));
