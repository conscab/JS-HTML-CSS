function calc(randNr){

 str = randNr.toString();
  var inv = [];
var init = 0;

for (var i = str.length-1; i>=0;i--)
{
  inv[init] = str[i];
 init++;
}

return parseInt(inv.join(""));
}

calc(322435500001);
