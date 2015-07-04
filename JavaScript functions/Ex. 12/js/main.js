function perfect(no){
    var count = 0;
    for(var i = 1; i<=no/2; i++)
        if (no % i == 0)
            count += i;

        if(count == no)
              console.log(true);
        else
              console.log(false);


}


perfect(8128);
