function jsonget(file) {
    fetch(file)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            appendData(data);
        })
        .catch(function (err) {
            console.log(err);
        });
}
function appendData(data) {
    for (var i = 0; i < data.length; i++) {
        createEl(data[i].img, data[i].title, data[i].fprice, data[i].aprice, data[i].sprice, data[i].aurl, data[i].furl, data[i].surl);
    }
}