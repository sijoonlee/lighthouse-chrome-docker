const {writeFile} = require('fs');
const {promisify} = require('util');
const pWriteFile = promisify(writeFile);
const chromeLauncher = require('chrome-launcher');
const lighthouse = require('lighthouse');
const {URL} = require('url');

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      // use results.lhr for the JS-consumable output
      // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
      // use results.report for the HTML/JSON/CSV output as a string
      // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
      return chrome.kill().then(() => results)
    });
  });
}

const run = async (url = 'https://ratehub.ca', exportTo = 'none') => {

  const opts = {
    chromeFlags: [
      '--disable-dev-shm-usage',
      '--headless',
      '--no-sandbox',
      '--ignore-certificate-errors'
    ],
    output: 'html'
  };


  const { report, lhr } = await launchChromeAndRunLighthouse(url, opts)

  
  console.log(`Lighthouse scores:\n${Object.keys(lhr.categories).map(key => {return `${key}:${lhr.categories[key]['score']}`}).join('\n')}`);

  if(exportTo === 'html'){
    await pWriteFile("report.html", report);
  }
  
  if(exportTo === 'json'){
    await pWriteFile("report.json", JSON.stringify(lhr),'utf8', (err) => {
      if(err !== null)
        return console.error(err);
    })
  }
  
};

module.exports = {
  run
}
