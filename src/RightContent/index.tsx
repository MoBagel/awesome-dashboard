import { Tag, Space } from 'antd';
import React from 'react';
// import { useModel } from 'umi';
import styles from './index.less';
import Avatar from './AvatarDropdown';
import SelectLang from './SelectLang';
import ExplorationDropdown from './ExplorationDropdown';
import InfoDropdown from './InfoDropdown';

export type SiderTheme = 'light' | 'dark';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068'
};

const GlobalHeaderRight: React.FC = ({
  layout,
  navTheme,
  versionTag,
  onUserlogout,
  formatMessage,
  currentUser,
  onTracking,
  services
}) => {
  // const { initialState } = useModel('@@initialState');

  // if (!initialState || !initialState.settings) {
  //   return null;
  // }

  // const { navTheme, layout } = initialState.settings || {};
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className} size={32}>
      <InfoDropdown formatMessage={formatMessage} onTracking={onTracking} />
      <ExplorationDropdown formatMessage={formatMessage} services={services} />
      <Avatar onUserlogout={onUserlogout} formatMessage={formatMessage} currentUser={currentUser} />
      {versionTag && (
        <span>
          <Tag color={ENVTagColor[versionTag]}>{versionTag}</Tag>
        </span>
      )}
      <SelectLang />
    </Space>
  );
};
export default GlobalHeaderRight;
