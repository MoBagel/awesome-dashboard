import { getSsoUrl, isUrl } from '../utils';

describe('Test isUrl', () => {
  const testCase1 = `https://test.com`;
  const testCase2 = `https:/test_com`;
  test(`isUrl true ${testCase1}`, () => {
    expect(isUrl(testCase1)).toBe(true);
  });

  test(`isUrl false ${testCase2}`, () => {
    expect(isUrl(testCase2)).toBe(false);
  });
});

describe('Test getSsoUrl dev', () => {
  const devSsoUrl = 'https//sso-dev.mobagel.com';
  const devRestockUrl = 'https://restock-dev.mobagel.com';

  beforeEach(() => {
    global.window = Object.create(window);
    const mockHost = devRestockUrl;
    Object.defineProperty(window, 'location', {
      value: {
        host: mockHost,
        protocol: 'https',
      },
      writable: true,
    });
  });

  afterEach(() => {
    window.location = location;
  });

  test(`dev-restock return sso-dev url`, async () => {
    expect(getSsoUrl()).toBe(devSsoUrl);
  });
});

describe('Test getSsoUrl prod', () => {
  const prodSsoUrl = 'https//sso.mobagel.com';
  const prodRestockUrl = 'https://restock.mobagel.com';

  beforeEach(() => {
    global.window = Object.create(window);
    const mockHost = prodRestockUrl;
    Object.defineProperty(window, 'location', {
      value: {
        host: mockHost,
        protocol: 'https',
      },
      writable: true,
    });
  });

  afterEach(() => {
    window.location = location;
  });

  test(`prod-restock getSsoUrl get return sso url`, async () => {
    expect(getSsoUrl()).toBe(prodSsoUrl);
  });
});
