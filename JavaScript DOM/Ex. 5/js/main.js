// wtf?
function scan(){

    var adresaUrl = document.getElementById("w3r").href;
    var adresaUrllang = document.getElementById("w3r").hreflang;
    var relatie = document.getElementById("w3r").rel;
    var trg = document.getElementById("w3r").target;
    var type = document.getElementById("w3r").type;
    var urlLang = document.getElementById("w3r").hreflang;



    document.write(adresaUrl);
    document.write("<br/>");

    document.write(adresaUrllang);
    document.write("<br/>");

    document.write(relatie);
    document.write("<br/>");

    document.write(trg);
    document.write("<br/>");

    document.write(type);
    document.write("<br/>");

    document.write(urlLang);
    document.write("<br/>");
}



//
//
//function getAttributes()
//{
//
//    var w = document.getElementById("w3r").rel;
//    alert('The value of the rel attribute of the link is : '+w);
//    var x = document.getElementById("w3r").target;
//    alert('The value of the taget attribute of the link is : '+x);
//    var y = document.getElementById("w3r").type;
//    alert('The value of the type attribute of the link is : '+y);
//}