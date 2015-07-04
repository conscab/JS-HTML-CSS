array = [1,2,3,5,23,56,89, 103, 203, 222];
console.log(array);
var mid = 0;
function binarySrc(array, key){
    mid = array.indexOf(array[(array.length/2 | 0)]);
    console.log("mid index is now: " + mid);

do
        {
            if(array[mid] == key)
                return console.log("number " + key + " found on index " + mid + " of new array.");
            else
                if(array[mid] < key)
                {
                    array = array.slice(mid+1, array.length);
                    mid = array.indexOf(array[(array.length/2 | 0)]);
                    console.log("subarray to search:" + array);
                    console.log("mid index is now at position: " + mid);
                    if(array[mid] == key)
                        return console.log("number " + key + " found on index " + mid + " of new array.");
                }
                else
                {
                    if(array[mid] > key)
                    {
                        array = array.slice(0,mid);
                        mid = array.indexOf(array[(array.length/2 | 0)]);
                        console.log("subarray to search:" + array);
                        console.log("mid is now at position: " + mid);
                        if(array[mid] == key)
                            return console.log("number " + key + " found on index " + mid + " of new array.");
                    }
                    else
                    {
                        console.log("subarray to search:" + array);
                        console.log("Number not found.");
                        break;
                    }
            }
        }
    while(array[mid] != key)

}
binarySrc(array, 544);