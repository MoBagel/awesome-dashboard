import React from 'react';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import HeaderDropdown from './HeaderDropdown';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.less';
import { getSsoUrl } from '../utils/utils';

import type {
  FormatMessageProp,
  UserlogoutProps,
  DropdownProps,
  avatarHiddenListProp,
} from './index.types';

export type GlobalHeaderRightProps = {
  onUserlogout: UserlogoutProps;
  formatMessage: FormatMessageProp;
  currentUser: {
    name: string;
  };
  extendsAvatarDropdown?: DropdownProps[];
  avatarHiddenList?: avatarHiddenListProp[];
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut: (onUserlogout: UserlogoutProps) => Promise<void> = async (onUserlogout) => {
  const isDisableRedirect = await onUserlogout();
  if (!isDisableRedirect) {
    window.location.assign(`${getSsoUrl()}/login`);
  }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({
  onUserlogout,
  formatMessage,
  currentUser,
  extendsAvatarDropdown = [],
  avatarHiddenList = [],
}) => {
  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
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
    <Menu className={styles.menu}>
      {!avatarHiddenList.includes('setting') && (
        <Menu.Item key="setting" onClick={() => window.location.assign(`${getSsoUrl()}/profile`)}>
          <SettingOutlined />
          {formatMessage({
            id: 'common.nav.settings',
          })}
        </Menu.Item>
      )}
      {extendsAvatarDropdown.length > 0 &&
        extendsAvatarDropdown.map(({ Icon, label, onClick }) => {
          return (
            <Menu.Item key="logout" onClick={onClick}>
              {Icon || <span style={{ paddingLeft: '22px' }}> </span>}
              {label}
            </Menu.Item>
          );
        })}
      {!avatarHiddenList.includes('logout') && (
        <Menu.Item key="logout" onClick={() => loginOut(onUserlogout)}>
          <LogoutOutlined />
          {formatMessage({
            id: 'common.nav.logout',
          })}
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar className={styles.avatar} icon={<UserOutlined />} alt="avatar" />
        {currentUser.name}
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
