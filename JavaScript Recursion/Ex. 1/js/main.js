var factorial = function(a) {

    if(a == 0)
        return 1;
    else
        return a * factorial(a-1);
};

document.write(factorial(21));
