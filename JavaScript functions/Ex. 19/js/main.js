function arrayElem(input, key){
console.log(input);
var result = [];
var k=0;

    for(var i=0;i<input.length;i++)
    {
    if(input[i]>key)
    {
        result[k] = input[i];
        k++;
    }
    }

return console.log(result);
}



var input = [1,2,3,4,5,6,7,45,1,2,3,4,5,78,546,87,8765,65,65,656,5656,45443,3434,343,465,65,323,232,12,1,2121];
arrayElem(input, 544);