function palindrome(randStr){

var pal = randStr;

    for(var i = 0; i<pal.length-1;i++)
        for(var j = pal.length-1; j>0;j--)

        {
        if(pal.length == 1)
        {
            document.write(randStr + " is a palindrome.");
            document.write("<br/>");
            return true;
        }
        else

             if(pal[i] != pal[j])
            {
                document.write(randStr + " is  not a palindrome.");
                document.write("<br/>");
                return false;
            }
            else
             {
                 document.write(randStr + " is a palindrome.");
                document.write("<br/>");
                return true;
             }
    }

}

palindrome("a 2 a ");
