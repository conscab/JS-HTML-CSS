function bubbleSort(str){
    console.log(str);

    var a = 0;
    var b = 0;
    var c = 0;
    var trigger = true;

    do{
        trigger = false;

        for(i=0;i<str.length;i++)
        {

                if(str[i]<str[i+1])
                {
                    c = str[i];
                    str[i] = str[i+1];
                    str[i+1]=c;
                    trigger = true;
                }

        }
    }
    while(trigger);

    return console.log(str);
}
bubbleSort([3,4,21,1,1,3,4,5,8,9,7,6,5555,4434,32,434,34,545,456]);
