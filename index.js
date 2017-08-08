const { Chromeless } = require('chromeless')

async function run() {
  const chromeless = new Chromeless({
    debug: true,
    launchChrome: false
  })

  const screenshot = await chromeless
    .goto('https://familysearch.org/search/record/results?count=75&query=%2Bsurname%3Athurman~')
    .wait('#hr-data-table tbody')
    .click('#hr-data-table > tbody > .row-template:first-of-type')
    .wait(5000)
    .screenshot()
    .catch(errorLogger('screenshot error'))

  console.log(screenshot) // prints local file path or S3 url

  // await chromeless.end().catch(errorLogger('end() error'))
}

run().catch(errorLogger('other error'));

function errorLogger(message) {
  return function(e) {
    console.log(message);
    console.error(e);
  };
}