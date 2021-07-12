const Scraper = require("./linktree-scraper");

Scraper('kaiserlol').then(profile => {
  console.log(profile);
}).catch((error) => {
  console.error(error);
  console.log('Uh oh!');
})
