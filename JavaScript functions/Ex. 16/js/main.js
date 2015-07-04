function extract(str){
    k = 0;
    console.log(str);
    var result = [];

    for(i=0;i<str.length;i++)
        for(j=i+1;j<str.length;j++)
        {
            if(str[i] == str[j])
            {
               result[k] = str[i];
               k++;
            }
        }

result = result.join('');
return result;
}
console.log(extract("XABCabYcABCabX"));

