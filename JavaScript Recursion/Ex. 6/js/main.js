function fibo(n)
{
    if (n == 1)
    {
        return [0, 1];
    }
    else
    {
        var s = fibo(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

document.write(fibo(1));