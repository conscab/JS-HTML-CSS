function stringId(size){

    var chars= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";

    for(i=0;i<size;i++)
        result += chars.charAt(Math.floor(Math.random() * chars.length));

return console.log(result);
}

stringId(2);