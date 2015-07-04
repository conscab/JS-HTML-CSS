function sumToCoins(sum, coinInput){

    sortedCoins = coinInput.sort(sortTwo).reverse();


    for(i=0;i<coinInput.length;i++)
    {
        console.log("sum impartit la sorted[i] " + (sum / sortedCoins[i]));
        while( sum  >=  sortedCoins[i])
        {
            console.log(sortedCoins[i]);
            sum -= sortedCoins[i];
        }
    }
}

var coins = [3,1,8,2];
sumToCoins(58118, coins);

function sortTwo(a,b){
    return a - b;
    }

console.log(sortedCoins);



//online vers:
//function amountToCoins(amount, coins)
//{
//    if (amount === 0)
//    {
//        return [];
//    }
//    else
//    {
//        if (amount >= coins[0])
//        {
//            var left = (amount - coins[0]);
//            return [coins[0]].concat( amountToCoins(left, coins) );
//        }
//        else
//        {
//            coins.shift();
//            return amountToCoins(amount, coins);
//        }