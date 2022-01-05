import type { Story, Meta } from '@storybook/react';
import React from 'react';
import { NotificationBar } from '../NotifticationBar';
import type { NotificationBarProps } from '../NotifticationBar';

const NotifticationBarStory: Meta = {
  title: 'Example/NotifticationBar',
  component: NotificationBar,
};

export default NotifticationBarStory;

const Template: Story<NotificationBarProps> = (args) => {
  return <NotificationBar {...args} />;
};

export const Example = Template.bind({});

Example.args = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCloseBanner: () => {},
  message: 'hello world',
  cancelButtonLabel: 'close',
  cancelButtonProp: {},
  confirmButtonLabel: 'confirm',
  confirmButtonProp: {},
  isShowCloseButton: true,
  isShowWarningIcon: true,
  styles: `background-color: #eee;`,
};
