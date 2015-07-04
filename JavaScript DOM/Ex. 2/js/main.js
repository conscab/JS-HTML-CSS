function values(){
    var form = document.getElementById("form1");
    for (var i = 0; i<form.length-1;i++)
    {
        if(form.elements[i].type == 'text'){
       document.write(form.elements[i].value);
       document.write("<br/>");
        }
    }
}


//online version
//var x=document.getElementById("form1");
//
//for (var i=0;i<x.length;i++)
//{
//    if (x.elements[i].value!='Submit')
//    {
//        console.log(x.elements[i].value);
//    }
//}