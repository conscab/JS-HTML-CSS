function letterCount(input, src){

    var count = 0;
    for(i=1;i<=input.length;i++)
        if(input[i] == src)
        {
            count++;
            console.log("Letter " + src + " was found " + count + " time(s).");
        }
}

letterCount("What if I told you that infinity times two is infinity and not larger?","o");