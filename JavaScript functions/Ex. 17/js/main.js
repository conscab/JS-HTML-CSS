function occurrances(str){
    console.log(str);
    var result = new Array(str.length);

    for(i=0;i<result.length;i++)
        result[i] = 0;
    for(i=0;i<str.length;i++)
        for(j=0;j<str.length;j++)
            if(str[i] == str[j])
                result[i]++;
    console.log(result);




//    k = 0;
//    var resultTrim = [];
//
//    for(i=0;i<str.length;i++)
//        for(j=0;j<str.length;j++)
//            if(str[i] == str[j])
//            {
//                resultTrim = result.substring(0,1);
//             }
//return resultTrim;
}
console.log(occurrances("*AAAAABBBBCabcABC23-3=//*"));

