import Scraper, { FormattedResults } from "../lib/index";

Scraper('katyperry').then((profile: FormattedResults) => {
  console.log(profile);
}).catch((error: Error) => {
  console.error(error);
  console.log('Uh oh!');
});