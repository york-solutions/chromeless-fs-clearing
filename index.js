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
    .screenshot()
}

run()