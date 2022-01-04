import { getSsoUrl, isUrl } from '../utils';

const testCase = `https://test.com`;

test(`isUrl test ${testCase}`, async () => {
  expect(isUrl(testCase)).toBe(true);
});

beforeEach(() => {
  global.window = Object.create(window);
  const mockHost = `https://restock-dev.mobagel.com`;
  Object.defineProperty(window, 'location', {
    value: {
      host: mockHost,
      protocol: 'https'
    },
    writable: true
  });
});

test(`dev-restock getSsoUrl get return sso url`, async () => {
  expect(getSsoUrl()).toBe('https//sso-dev.mobagel.com');
});

afterEach(() => {
  window.location = location;
});
