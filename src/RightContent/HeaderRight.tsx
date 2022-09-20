import { Tag, Space } from 'antd';
import React from 'react';
import styles from './index.less';
import Avatar from './AvatarDropdown';
import ExplorationDropdown from './ExplorationDropdown';
import InfoDropdown from './InfoDropdown';
import SelectLang from './SelectLang';

import type {
  ServiceProp,
  FormatMessageProp,
  UserlogoutProps,
  DropdownProps,
  exploreHiddenListProp,
  infoHiddenListProp,
  avatarHiddenListProp,
} from './index.types';

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
  avatarHiddenList?: avatarHiddenListProp[];
  infoHiddenList?: infoHiddenListProp[];
  exploreHiddenList?: exploreHiddenListProp[];
  isShowLang?: boolean;
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
  avatarHiddenList,
  extendsInfoDropdown,
  infoHiddenList,
  exploreHiddenList,
  onUpdateLocale,
  isShowLang,
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
        infoHiddenList={infoHiddenList}
      />
      <ExplorationDropdown
        formatMessage={formatMessage}
        services={services}
        onTracking={onTracking}
        exploreHiddenList={exploreHiddenList}
      />
      <Avatar
        onUserlogout={onUserlogout}
        formatMessage={formatMessage}
        currentUser={currentUser}
        extendsAvatarDropdown={extendsAvatarDropdown}
        avatarHiddenList={avatarHiddenList}
      />
      {versionTag && (
        <span>
          <Tag color={ENVTagColor[versionTag]}>{versionTag}</Tag>
        </span>
      )}
      {isShowLang && <SelectLang onUpdateLocale={onUpdateLocale} />}
    </Space>
  );
};
