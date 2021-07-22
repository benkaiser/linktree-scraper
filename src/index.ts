import fetch, { Response } from "node-fetch";
import * as cheerio from 'cheerio';
import type { DataNode } from 'domhandler';

export default function Scraper(profile: string): Promise<any> {
  return fetch('https://linktr.ee/' + profile)
  .then((response: Response) => response.text())
  .then((responseHtml: string) => {
    try {
      const $ = cheerio.load(responseHtml);
      const data = (
        ($('#__NEXT_DATA__')[0] as cheerio.NodeWithChildren
      ).children[0] as unknown as DataNode).data;
      return JSON.parse(data);
    } catch (e) {
      throw new Error('Unable to parse linktree config data');
    }
  });
}