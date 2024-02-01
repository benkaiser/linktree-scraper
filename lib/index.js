"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const cheerio = __importStar(require("cheerio"));
function Scraper(profile) {
    return (0, node_fetch_1.default)('https://linktr.ee/' + profile)
        .then((response) => response.text())
        .then((responseHtml) => {
        try {
            const $ = cheerio.load(responseHtml);
            const data = $('#__NEXT_DATA__')[0].children[0].data;
            return convertRawToFormattedResults(JSON.parse(data));
        }
        catch (e) {
            throw new Error('Unable to parse linktree config data');
        }
    });
}
exports.default = Scraper;
function convertRawToFormattedResults(raw) {
    return {
        title: raw.props.pageProps.pageTitle,
        username: raw.props.pageProps.account.username,
        profilePictureUrl: raw.props.pageProps.account.profilePictureUrl,
        links: raw.props.pageProps.links.map((link) => {
            return {
                title: link.title,
                url: link.url
            };
        }),
        socials: raw.props.pageProps.socialLinks.map((social) => {
            return {
                type: social.type,
                url: social.url
            };
        }),
        raw: raw
    };
}
