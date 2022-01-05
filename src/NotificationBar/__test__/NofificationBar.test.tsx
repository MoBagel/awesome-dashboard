import React from 'react';
import { NotificationBar } from '../NotifticationBar';
import type { NotificationBarProps } from '../NotifticationBar';
import { render, cleanup } from '@testing-library/react';

describe('Test NotificationBar render', () => {
  afterEach(cleanup);

  const props: NotificationBarProps = {
    onCloseBanner: () => {},
    message: 'hello world',
    cancelButtonLabel: 'close',
    confirmButtonLabel: 'confirm'
  };

  test('test render string mapping', () => {
    const { getByText } = render(<NotificationBar {...props} />);

    expect(getByText('hello world').textContent).toBe('hello world');
  });
});
