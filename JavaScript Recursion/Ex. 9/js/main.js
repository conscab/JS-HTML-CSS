to be continued..

//online version
Array.prototype.merge_Sort = function () {
    if (this.length <= 1)
    {
        return this;
    }

    var half = parseInt(this.length / 2);
    var left = this.slice(0, half).merge_Sort();
    var right = this.slice(half, this.length).merge_Sort();
    var merge = function (left, right)
    {
        var arry = [];
        while (left.length > 0 && right.length > 0)
        {
            arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
        }
        return arry.concat(left).concat(right);
    };

    return merge(left, right);
};
//var a = [34];
var a = [00001,5,34,7,23,32,5,62,3,344,43,43,3,4,3,456,56,567,8,555,97,331,090,890,89,0,890,89,089,0890,89,0,465,6346,34];
document.write(a.merge_Sort());