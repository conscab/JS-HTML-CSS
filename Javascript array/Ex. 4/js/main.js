var matrix = [true, "unity3d", 1,2,"unity3d", true, "poz", "neg", "proxima centauri", false, 451, "orion", "orion" , 2, 1, true, 1];
document.write(matrix);
document.write("<br/>");
var countMatrix = new Array(matrix.length);
for(var i = 0;i<countMatrix.length;i++)
    countMatrix[i] = 0;
var finalMatrix = new Array();
document.write(countMatrix);
document.write("<br/>");

for(var i = 0; i<matrix.length; i++) {
    var count = 0;
    for (var j = 0; j < matrix.length; j++) {
        if (matrix[i] === matrix[j] ){
            countMatrix[i] += 1;
            count++;}
    }
}
document.write("<br/>");
document.write(countMatrix);