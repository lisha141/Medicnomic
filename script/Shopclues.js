const puppeteer=require('puppeteer');
Shopclues=async function(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 0 });
    
    const[el]= await page.$x('//*[@id="zoom_picture_gall"]');
    const src = await el.getProperty('src');
    const imageurl=await src.jsonValue(); 

    const[el2]= await page.$x("//h1[@itemprop='name']");
    const txt = await el2.getProperty('textContent');
    const title=await txt.jsonValue();
    titles=title.trim();

    const[el3]= await page.$x("//div[@class='price spr_dis']//span[@class='f_price']");
    const txt2 = await el3.getProperty('textContent');
    const price=await txt2.jsonValue();
    
   return { imageurl,titles,price,url };
    browser.close();
}
Shopclues("https://www.shopclues.com/ppe-kit-for-corona-protection-full-protection-with-ppe-kit-premium-quality-150101876.html");
