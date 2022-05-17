import { Tag, Space } from 'antd';
import React from 'react';
import styles from './index.less';
import Avatar from './AvatarDropdown';
import ExplorationDropdown from './ExplorationDropdown';
import InfoDropdown from './InfoDropdown';

import type { ServiceProp, FormatMessageProp, UserlogoutProps, DropdownProps } from './index.types';

export type SiderTheme = 'light' | 'dark';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

export interface HeaderRightProps {
  layout: 'top' | 'mix';
  navTheme?: 'dark';
  versionTag?: 'dev' | 'test' | 'pre' | false;
  onUserlogout: UserlogoutProps;
  formatMessage: FormatMessageProp;
  currentUser: { name: string };
  onTracking: (type: string) => void;
  services: ServiceProp[];
  onUpdateLocale: (lang: string, realReload?: boolean) => void;
  extendsAvatarDropdown?: DropdownProps[];
  extendsInfoDropdown?: DropdownProps[];
}

export const HeaderRight: React.FC<HeaderRightProps> = ({
  layout,
  navTheme,
  versionTag,
  onUserlogout,
  formatMessage,
  currentUser,
  onTracking,
  services,
  extendsAvatarDropdown,
  extendsInfoDropdown,
}) => {
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className} size={32}>
      <InfoDropdown
        formatMessage={formatMessage}
        onTracking={onTracking}
        extendsInfoDropdown={extendsInfoDropdown}
      />
      <ExplorationDropdown
        formatMessage={formatMessage}
        services={services}
        onTracking={onTracking}
      />
      <Avatar
        onUserlogout={onUserlogout}
        formatMessage={formatMessage}
        currentUser={currentUser}
        extendsAvatarDropdown={extendsAvatarDropdown}
      />
      {versionTag && (
        <span>
          <Tag color={ENVTagColor[versionTag]}>{versionTag}</Tag>
        </span>
      )}
    </Space>
  );
};
