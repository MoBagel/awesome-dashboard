import React from 'react';
import { useIntl } from "react-intl";

import Header from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/HeaderRight',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const intl = useIntl()
  return <Header {...args} formatMessage={({ id }) => intl.formatMessage({ id })} />
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
