function subSTR(str){
    var sub = [];
    for (var i = 0; i < str.length; i++)
    {
        for (var j = i + 1; j <= str.length; j++)
        {
            sub.push(str.substring(i,j));
        }
    }
    return sub;
}
alert(subSTR("galaxy"));