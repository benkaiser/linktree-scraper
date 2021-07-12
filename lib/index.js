const Scraper = require("./linktree-scraper");

Scraper('kaiserlol').then(profile => {
  console.log(JSON.stringify(profile, null, 2));
}).catch((error) => {
  console.error(error);
  console.log('Uh oh!');
})
