var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(16, 2048));












//function gcd(a,b) {
//
//    if (b > a)
//    {
//        var temp = a;
//        a = b;
//        b = temp;
//    }
//
//    while (true) {
//        a %= b;
//        if (a == 0)
//            return b;
//
//        b %= a;
//
//        if (b == 0)
//            return a;
//    }
//}
//
//console.log(gcd(2048, 256));