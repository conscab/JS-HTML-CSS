//function prime(inputNo){
//
//    if((inputNo != 1) || (inputNo != 2) || (inputNo != 3) || (inputNo != 3) || (inputNo != 7))
//
//            if((inputNo % 2 != 0) && (inputNo % 3 != 0) && (inputNo % 5 != 0) && (inputNo % 7 != 0))
//                return true;
//            else
//            return false;
//    else
//
//        switch(inputNo)
//        {
//            case '1': return false; break;
//            case '2': return true; break;
//            case '3': return true; break;
//            case '5': return true; break;
//            case '7': return true; break;
//        }
//}


function prime(inputNo){

    if (inputNo == 1)

        return false;

    else
        if(inputNo == 2)
            return true;
        else
        {
            for(var i = 2; i<inputNo; i++)
            {
                if(inputNo % i == 0)
                {
                    return false;
                }
            }
        return true;
    }
}

console.log(prime(15485863));