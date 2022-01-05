import type { Story, Meta } from '@storybook/react';
import React from 'react';
import { useIntl } from 'react-intl';
import { HeaderRight } from '../HeaderRight';
import type { HeaderRightProps } from '../HeaderRight';

const HeaderStory: Meta = {
  title: 'Test/HeaderRight',
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
  currentUser: { name: 'test' },
  services: [],
  formatMessage: ({ id }) => id,
};
