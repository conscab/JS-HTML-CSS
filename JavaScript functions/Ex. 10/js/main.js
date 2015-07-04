function idMatrix(no){


   var row = new Array(no);
   console.log(row);

   var result = new Array(no);
   console.log(result);



   for(var i=0;i<result.length;i++)
   {
         for(var j=0;j<row.length;j++)
         {
               if( i == j)
                  row[i] = 1;
               else
                  row[j] = 0;
         }
   console.log(result[i] = row);
   }



   return result;
}


idMatrix(23);




//ONLINE VERs:
//function matrix(n) {
//
//   var i;
//   var j;
//
//   for (i=0; i<n; i++)
//   {
//      for (j=0; j<n; j++)
//      {
//         if (i === j)
//         {
//
//            console.log(' 1 ');
//         }
//
//         else
//         {
//            console.log(' 0 ');}
//      }
//      console.log('----------');
//   }
//}
//matrix(4);