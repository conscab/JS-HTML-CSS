var rand = Math.ceil(Math.random() * 10);
var input = prompt('number from 1 to 10:');

if(input == rand)
    document.write("nr guessed");
else
    document.write("nr not guessed");
