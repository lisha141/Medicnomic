const puppeteer = require('puppeteer');
async function Amazon(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="landingImage"]');
    const src = await el.getProperty('src');
    const imageurl=await src.jsonValue(); 

     const [el2]= await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent');
    const title=await txt.jsonValue();
    titles=title.trim();

    const [el3]= await page.$x('//*[@id="priceblock_ourprice"]');
    const txt2 = await el3.getProperty('textContent');
    const price=await txt2.jsonValue();
   console.log({imageurl, titles, price});
    browser.close();
}
Amazon("https://www.amazon.in/DALUCI-Cotton-Filtration-Capacity-Layered/dp/B08CMLBHJJ/ref=sr_1_6?dchild=1&keywords=mask&qid=1620913939&sr=8-6");
