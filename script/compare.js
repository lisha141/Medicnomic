function compare(a, b, c) {
    var x = a.trim().slice(1);
    var y = b.trim().slice(1);
    var z = c.trim().slice(1);
    var result = [];
    if (x !== "")
    result.push(parseFloat(x));
    if(y!== "")
    result.push(parseFloat(y));
    if(z!=="")
    result.push(parseFloat(z));
    result.sort(function (a, b){
        return a - b;
    });
    return result;
}

