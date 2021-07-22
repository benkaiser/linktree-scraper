# Linktree Profile Scraper

This library helps you pull the raw JSON payload out of a linktree profile. This is by no means an official tool and could break by any code changes from the Linktree team.

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

Here is [an example of the data format that is returned](https://github.com/benkaiser/linktree-scraper/blob/master/example_data.json).

## Credits

I started this library off from this template: https://github.com/krasimir/webpack-library-starter

## License

MIT