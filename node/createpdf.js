const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const event = require('./event');

handlebars.registerHelper('checked', function (currentValue) {
  if (currentValue === true || Number(currentValue) > 0 || (typeof currentValue === 'string' && currentValue.length) || typeof currentValue === 'object') return ' checked="checked"';
});

handlebars.registerHelper('IfGreaterThanZero', (currentValue) => {
  if (Number(currentValue) > 0) return currentValue;
});

function generateTemplate(event) {
  const templateHtml = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
  const template = handlebars.compile(templateHtml);
  const html = template(event);
  return html;
}

async function generatePdf(event) {
  const puppeteer = require('puppeteer');

  const browser = await puppeteer.launch({ headless: true, devtools: true });
  const page = await browser.newPage();
  // await page.goto('http://pdf-template-navneet.s3-website-ap-southeast-1.amazonaws.com/');

  await page.setContent(generateTemplate(event));
  await page.addStyleTag({ path: './node_modules/bootstrap/dist/css/bootstrap.css' });
  await page.addStyleTag({
    content: `
    .card {
      border: 1.5px solid rgba(0,0,0,0.8);
    }
    `});

  await page.pdf({ path: 'filename.pdf', format: 'A4', printBackground: true });
  await browser.close();

}
generatePdf(event);
