# Linktree Profile Scraper

This library helps you pull the raw JSON payload out of a linktree profile. This is by no means an official tool and could break by any code changes from the Linktree team.

## Usage

```javascript
const Scraper = require("./linktree-scraper");

Scraper('username').then(profile => {
  console.log(profile);
}).catch((error) => {
  console.error(error);
  console.log('Uh oh!');
});
```

## Credits

I started this library off from this template: https://github.com/krasimir/webpack-library-starter

## License

MIT