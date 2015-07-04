function nonRepChar(str){
    console.log(str);
    var result = new Array(str.length);

    for(i=0;i<result.length;i++)
        result[i] = 0;
    for(i=0;i<str.length;i++)
        for(j=0;j<str.length;j++)
            if(str[i] == str[j])
                result[i]++;


for(i=0;i<result.length;i++)
if(result[i] == 1)
{
    var k = str[i];
    return k;
}

}
console.log(nonRepChar("*AAAAABBBBCabacABC23-3=//*"));
