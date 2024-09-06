export const BASE_PATH = '/collab';
export const HOME_PATH = '/';
export const API_URL = process.env.REACT_APP_API_URL as string;
export const BASE_URL = process.env.REACT_APP_BASE_URL as string;
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID as string;
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET as string;
export const OAuthScope = ['identify', 'guilds'].join(' ');
