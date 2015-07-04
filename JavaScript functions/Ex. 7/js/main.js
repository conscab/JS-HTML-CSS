function vowel(str){

    var vowelStr = ['a', 'e', 'i', 'o', 'u'];
    var c = 0;

    for(i=0;i<str.length;i++)
        for(j=0;j<vowelStr.length;j++)
            if(str[i] == vowelStr[j])
                c++;

    return c;
}


console.log(vowel("How many vowels does this string have?"));