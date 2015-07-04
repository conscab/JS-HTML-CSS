var string = 'w3resource';
var array = new Array();

// 'w3resource'.split('')
for (var i = 0; i < string.length; i++)
{
array[i] = string[i];
}
// -^

document.write("string to array:");
document.write("<br/>");
document.write(array.join('') /* join does magik*/);
document.write("<br/>");


document.write("letter switch:");
document.write("<br/>");

// array.pop();
var j = 0;
do{
var end = array.pop();
    document.write(end);
    document.write("<br/>");

    array.unshift(end);
document.write(array.join('') /* join does magik*/);
    document.write("<br/>");

    j++;
}
while(j<10);

// alternative for -^
for (var i = 0; i < string.length; i++){
    document.write(string.slice(string.length - i - 1, string.length) + string.slice(0, string.length - i - 1) + '<br>')
}

// online solution:

//function animate_string(id)
//{
//    var element = document.getElementById(id);
//    var textNode = element.childNodes[0]; // assuming no other children
//    var text = textNode.data;
//
//    setInterval(function ()
//    {
//        text = text[text.length - 1] + text.substring(0, text.length - 1);
//        textNode.data = text;
//    }, 100);
//}
