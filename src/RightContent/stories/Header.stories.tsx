import type { Story, Meta } from '@storybook/react';
import React from 'react';
import { useIntl } from 'react-intl';
import { HeaderRight } from '../HeaderRight';
import type { HeaderRightProps } from '../HeaderRight';

const HeaderStory: Meta = {
  title: 'Example/HeaderRight',
  component: HeaderRight,
};

export default HeaderStory;

const Template: Story<HeaderRightProps> = (args) => {
  const intl = useIntl();
  const format = ({ id }: { id: string }) => intl.formatMessage({ id });
  return <HeaderRight {...args} formatMessage={format} />;
};

export const Primary = Template.bind({});

Primary.args = {
  layout: 'top',
  navTheme: undefined,
  versionTag: 'dev',
  currentUser: { name: 'test user' },
  services: [
    {
      externalDomain: 'https://google.com',
      serviceName: 'restock',
      onClick: () => {
        alert('click');
      },
    },
    {
      externalDomain: 'https://www.google.com.tw/',
      serviceName: 'repurchase',
    },
  ],
  formatMessage: ({ id }) => id,
  onTracking: () => {}
};
