function subset(array, subSetSize){
console.log("Calculating subsets of size " + subSetSize + " from array " + array);
subset = new Array();

var k = 0;
    for(i=0;i<array.length;i++)
            for(j=i+1;j<array.length;j++)
            do{
                subset = [array[i],array[j]];
                console.log(subset);
                k++;
            }
            while(k<array.length);
        /// to be continued
    //return console.log(subset);
}
subset(['a','b','c','d'],3);


//online version
//var combine = function(a, min) {
//    var fn = function(n, src, got, all) {
//        if (n == 0) {
//            if (got.length > 0) {
//                all[all.length] = got;
//            }
//            return;
//        }
//        for (var j = 0; j < src.length; j++) {
//            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
//        }
//        return;
//    }
//    var all = [];
//    for (var i = min; i < a.length; i++) {
//        fn(i, a, [], all);
//    }
//    all.push(a);
//    return all;
//}



//online version...
//function subset(arra, arra_size)
//{
//    var result_set = [],
//        result;
//
//
//    for(var x = 0; x < Math.pow(2, arra.length); x++)
//    {
//        result = [];
//        i = arra.length - 1;
//        do
//        {
//            if( (x & (1 << i)) !== 0)
//            {
//                result.push(arra[i]);
//            }
//        }  while(i--);
//
//        if( result.length >= arra_size)
//        {
//            result_set.push(result);
//        }
//    }
//    return result_set;
//}
//
//console.log(subset([1, 2, 3,4,5], 4));