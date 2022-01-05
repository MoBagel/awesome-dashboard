import React from 'react';
import { HeaderRight } from '../HeaderRight';
import type { HeaderRightProps } from '../HeaderRight';
import { render, cleanup } from '@testing-library/react';

describe('Test NotificationBar render', () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });
  afterEach(cleanup);

  const props: HeaderRightProps = {
    layout: 'top',
    navTheme: undefined,
    versionTag: 'dev',
    currentUser: { name: 'test' },
    services: [],
    formatMessage: ({ id }) => id,
    onUserlogout: async () => {},
    onTracking: () => {}, 
    onUpdateLocale: () => {},
  };

  test('account name is mapping', () => {
    const { getByText } = render(<HeaderRight {...props} />);

    expect(getByText('test').textContent).toBe('test');
  });
});
