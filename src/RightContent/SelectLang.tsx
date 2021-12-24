import React from 'react';
import { GlobalOutlined } from '@ant-design/icons';
import { Menu, Space } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import HeaderDropdown from './HeaderDropdown';
import styles from './index.less';

const DEFAULT_LANGS = [
  {
    lang: 'en-US',
    label: 'English',
    title: 'Language'
  },
  {
    lang: 'zh-TW',
    label: '繁體中文'
  }
];

const SelectedLang: React.FC<{ onUpdateLocale: (lang: string, realReload?: boolean) => void }> = ({
  onUpdateLocale
}) => {
  const itemClick = (item: MenuInfo) => {
    onUpdateLocale(item?.key, false);
  };

  const menu = (
    <Menu onClick={itemClick}>
      {DEFAULT_LANGS.map((lang) => (
        <Menu.Item key={lang?.lang}>
          <Space>{lang.label}</Space>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <HeaderDropdown overlay={menu} placement='bottomCenter'>
      <span className={styles.action}>
        <GlobalOutlined />
      </span>
    </HeaderDropdown>
  );
};

export default SelectedLang;
