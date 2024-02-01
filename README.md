# Linktree Profile Scraper

This library helps you pull the links/socials from a linktree profile. This is by no means an official tool and could break by any code changes from the Linktree team.

Use of this library is at the discression of the consumer, make sure you are only scraping profiles that you have permission to use.

## Usage

Install the package

```
npm install --save linktree-scraper
```

Scrape a profile

```javascript
const Scraper = require("linktree-scraper").default;

Scraper('username').then(profile => {
  console.log(profile);
}).catch((error) => {
  console.error(error);
  console.log('Uh oh!');
});
```

The results are somewhat normalized, but you can always the raw original values with `profile.raw`.

Here is [an example of the raw data format that is returned](https://github.com/benkaiser/linktree-scraper/blob/master/example_data.json).

If you are using typescript, we even export the typinging for the formatted profile results, so you can do:

```typescript
import Scraper, { FormattedResults } from "../lib/index";

Scraper('username').then((profile: FormattedResults) => {
  console.log(profile);
}).catch((error: Error) => {
  console.error(error);
  console.log('Uh oh!');
});
```

## Credits

I started this library off from this template: https://github.com/krasimir/webpack-library-starter

## License

MIT