function longest(str){
    localStr = str.split(' ');
    var result = [];

    for(i=0; i<localStr.length;i++)
    {
           if(localStr[i].length > result.length)
            result = localStr[i];
            }
 return result;
}
console.log(longest("This is a sample sentence and we test the length of words."));