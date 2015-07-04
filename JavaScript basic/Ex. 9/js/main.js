var today = new Date();
var christmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth()==11 && today.getDate()>25)
{
    christmas.setFullYear(christmas.getFullYear()+1);
}
var day = 1000*60*60*24;
alert(Math.ceil((christmas.getTime()-today.getTime())/day )+
" days til Christmas!");