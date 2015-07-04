function upper(str){

    str = str.split(' ');
    var result = [];

    for(var i=0;i<str.length;i++)

        result.push(str[i].charAt(0).toUpperCase()+str[i].slice(1));

    return result.join(' ');

}
console.log(upper("this is my galaxy nexus phone. it is the 3rd in the series."));