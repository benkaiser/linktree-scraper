import Scraper, { FormattedResults } from "../lib/index";

if (!process.env.LINKTREE_USER) {
  throw new Error('LINKTREE_USER environment variable not set');
}

console.log("Scraping: " + process.env.LINKTREE_USER);
Scraper(process.env.LINKTREE_USER!).then((profile: FormattedResults) => {
  console.log(profile);
}).catch((error: Error) => {
  console.error(error);
  console.log('Uh oh!');
});