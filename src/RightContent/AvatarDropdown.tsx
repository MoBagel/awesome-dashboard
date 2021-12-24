import React, { useCallback } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import HeaderDropdown from './HeaderDropdown';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.less';
import type { MenuInfo } from 'rc-menu/lib/interface';
import { getSsoUrl } from '../utils/utils';

import type { FormatMessageProp, UserlogoutProps } from './index.types';

export type GlobalHeaderRightProps = {
  onUserlogout: UserlogoutProps;
  formatMessage: FormatMessageProp;
  currentUser: {
    name: string;
  };
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut: (onUserlogout: UserlogoutProps) => Promise<void> = async (onUserlogout) => {
  await onUserlogout();
  window.location.assign(`${getSsoUrl()}/login`);
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ onUserlogout, formatMessage, currentUser }) => {
  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout' && currentUser) {
        loginOut(onUserlogout);
      }
    },
    [currentUser, onUserlogout]
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size='small'
        style={{
          marginLeft: 8,
          marginRight: 8
        }}
      />
    </span>
  );

  if (!currentUser) {
    return loading;
  }

  if (!currentUser || !currentUser?.name) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} onClick={onMenuClick}>
      <Menu.Item key='logout'>
        <LogoutOutlined />
        {formatMessage({
          id: 'common.nav.logout'
        })}
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar className={styles.avatar} icon={<UserOutlined />} alt='avatar' />
        {currentUser.name}
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
