function valueTypes(input){
   return typeof input;
}
console.log(valueTypes(valueTypes()));



//online version
//function detect_data_type(value)
//{
//    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
//
//    if (typeof value === "object" || typeof value === "function")
//    {
//        for (x = 0, len = dtypes.length; x < len; x++)
//        {
//            if (value instanceof dtypes[x])
//            {
//                return dtypes[x];
//            }
//        }
//    }
//
//    return typeof value;
//}
//alert(detect_data_type(12));
//alert(detect_data_type('w3resource'));
//alert(detect_data_type(false));