const puppeteer = require('puppeteer');
async function Flipkart(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil:'load',timeout:0});

    /*const[el]= await page.$x("//div[@class='CXW8mj _3nMexc']//img[@class='_396cs4 _2amPTt _3qGmMb      _3exPp9']");
    const src = await el.getProperty('src');
    const imageurl=await src.jsonValue(); */

    const[el2]= await page.$x("//h1[@class='yhB1nd']//span[@class='B_NuCI']");
    const txt=await el2.getProperty('textContent');
    const title=await txt.jsonValue();
    titles=title.trim();

    const[el3]= await page.$x("//div[@class='_25b18c']//div[@class='_30jeq3 _16Jk6d']");
    const txt2 = await el3.getProperty('textContent');
    const price=await txt2.jsonValue();

    console.log( {titles,price});
    browser.close();
    

}

Flipkart("");

