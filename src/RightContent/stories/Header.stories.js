import React from 'react';
import { useIntl } from "react-intl";

import Header from '../index';

export default {
  title: 'Example/HeaderRight',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template = (args) => {
  const intl = useIntl()
  return <Header {...args} formatMessage={({ id }) => intl.formatMessage({ id })} />
};

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'sss',
  layout: 'top',
  navTheme: '',
  versionTag: 'dev',
  onUserlogout: () => { },
  currentUser: () => { },
  onTracking: () => { },
  services: [],
};
