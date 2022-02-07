import { IonicAuthOptions } from '@ionic-enterprise/auth';

const baseConfig = {
  authConfig: 'cognito' as 'cognito',
  clientID: '4geagm2idmq87fii15dq9toild',
  discoveryUrl: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_YU8VQe29z/.well-known/openid-configuration',
  clientSecret: '124dch1p6824ppuef8o71unk14d4pt3p5hnntofvu21i2m960r1g',
  scope: 'openid email profile',
  audience: '',
};

export const mobileAuthConfig: IonicAuthOptions = {
  authConfig: 'ping',
  clientID: 'pde_provider_mobile',
  clientSecret: 'FAKE_CLIENT_SECRET',
  discoveryUrl: 'https://fssocaregivertst.intermountain.net/.well-known/openid-configuration',
  scope: 'openid profile',
  redirectUri: 'org.intermountain.pde.mobile://callback',
  logoutUrl: 'org.intermountain.pde.mobile://logout',
  platform: 'capacitor',
  iosWebView: 'private',
  webAuthFlow: 'PKCE',
  logLevel: 'DEBUG',
  androidToolbarColor: '#3388DD',
};

export const webAuthConfig: IonicAuthOptions = {
  authConfig: 'ping',
  clientID: 'pde_provider_web',
  clientSecret: 'FAKE_CLIENT_SECRET',
  discoveryUrl: 'https://fssocaregivertst.intermountain.net/.well-known/openid-configuration',
  scope: 'openid profile',
  redirectUri: 'http://localhost:8100/login',
  logoutUrl: 'http://localhost:8100/logout',
  platform: 'web',
  iosWebView: 'private',
  webAuthFlow: 'PKCE',
  logLevel: 'DEBUG',
  androidToolbarColor: '#3388DD',
};

export const environment = {
  production: false,
  dataService: 'https://cs-demo-api.herokuapp.com',
};
