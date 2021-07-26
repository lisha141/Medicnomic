function createEl(img_src, title_1, price_1, price_2, price_3,i) {
    var col = document.createElement('div');
    col.className = 'col-sm-6';
    var product = document.createElement('div');
    product.setAttribute("id", i);
    product.classList.add('product', 'd-flex');
    var product_img = document.createElement('img');
    product_img.className = 'img-thumbnail';
    product_img.src = img_src;
    var product_text = document.createElement('div');
    product_text.className = 'text';
    var title = document.createElement('h4');
    var link = document.createElement('a');
    link.className = 'text-center';
    var price1 = document.createElement('h5');
    price1.classList.add('text-primary', 'text-left');
    var price2 = document.createElement('h5');
    price2.classList.add('text-muted', 'text-center');
    var price3 = document.createElement('h5');
    price3.classList.add('text-muted', 'text-right');

    //appending
    var min = compare(price_1, price_2, price_3);
    document.getElementById('#1').appendChild(col);
    col.appendChild(product);
    product.appendChild(product_img);
    product.appendChild(product_text);
    product_text.appendChild(title);
    title.appendChild(link);
    product_text.appendChild(price1);
    product_text.appendChild(price2);
    product_text.appendChild(price3);
    link.innerText = title_1;
    price1.innerHTML = "<strong>" + "&#8377;" + min[0] + "</strong>";
    if (typeof min[1] !== 'undefined')
        price2.innerHTML = "<strong>" + "&#8377;" + min[1] + "</strong>";
    if (typeof min[2] !== 'undefined')
    price3.innerHTML = "<strong>" + "&#8377;" +min[2] + "</strong>";
   
}


