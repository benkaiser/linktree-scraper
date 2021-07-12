import Scraper from "./linktree-scraper";

Scraper('benkaiser').then(profile => {
  console.log(profile);
});