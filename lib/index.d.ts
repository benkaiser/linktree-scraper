export interface ResultLink {
    title: string;
    url: string;
}
export interface ResultSocial {
    type: string;
    url: string;
}
export interface FormattedResults {
    title: string;
    username: string;
    profilePictureUrl: string;
    links: Array<ResultLink>;
    socials: Array<ResultSocial>;
    raw: any;
}
export default function Scraper(profile: string): Promise<FormattedResults>;
