const puppeteer = require('puppeteer');
(async () => {
  const b = await puppeteer.launch({ executablePath: '/home/claude/.cache/puppeteer/chrome/linux-131.0.6778.204/chrome-linux64/chrome', args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1200, height: 1100, deviceScaleFactor: 2 });
  await p.goto('http://localhost:3224/', { waitUntil: 'networkidle0', timeout: 45000 });
  await new Promise(r => setTimeout(r, 3000));
  await p.screenshot({ path: '/tmp/v3-full.png' });
  await p.screenshot({ path: '/tmp/v3-header.png', clip: { x: 0, y: 0, width: 640, height: 100 } });
  await b.close(); console.log('ok');
})();
