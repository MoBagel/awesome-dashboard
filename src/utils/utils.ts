/* eslint-disable no-useless-escape */
const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const getSsoUrl = () => {
  // get corresponding sso url, for example:
  // smb-dev.mobagel.com -> sso-dev.mobagel.com
  // smb.localhost.com -> sso.localhost.com
  // smb-demo.mobagel.com -> sso-demo.mobagel.com
  const domains = window.location.host.split('.');
  const subDomain = domains[0].split('-');
  subDomain[0] = 'sso';
  domains.shift();
  return `${window.location.protocol}//${subDomain.join('-')}.${domains.join('.')}`;
};
