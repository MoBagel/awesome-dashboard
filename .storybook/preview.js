import React from 'react';
import 'antd/dist/antd.css';
import { IntlProvider } from 'react-intl';

import messages from '../locales/en.json';

export const decorators = [
  (Story) => (
    <IntlProvider messages={messages} locale={'en'} defaultLocale={'en'}>
        <Story />
    </IntlProvider>
  ),
];