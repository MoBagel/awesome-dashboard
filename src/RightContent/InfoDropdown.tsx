import React from 'react';
import { Menu } from 'antd';
import styles from './index.less';
import { QuestionCircleOutlined } from '@ant-design/icons';
import HeaderDropdown from './HeaderDropdown';
import type { FormatMessageProp, DropdownProps } from './index.types';

const QuestionMenu: React.FC<{
  onTracking: (type: string) => void;
  formatMessage: FormatMessageProp;
  extendsInfoDropdown?: DropdownProps[];
}> = ({ formatMessage, onTracking, extendsInfoDropdown = [] }) => {
  return (
    <Menu>
      <Menu.Item
        onClick={() => {
          onTracking('contact');
          window.open('https://www.8ndpoint.com/contact');
        }}
      >
        {formatMessage({ id: 'common.nav.contact' })}
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          onTracking('faq');
          window.open('https://www.8ndpoint.com/faq');
        }}
      >
        {formatMessage({ id: 'common.nav.faq' })}
      </Menu.Item>
      {extendsInfoDropdown.length > 0 &&
        extendsInfoDropdown.map(({ Icon, label, onClick }) => {
          return (
            <Menu.Item key="logout" onClick={onClick}>
              {Icon}
              {label}
            </Menu.Item>
          );
        })}
    </Menu>
  );
};

const InfoDropDwon: React.FC<{
  onTracking: (type: string) => void;
  formatMessage: FormatMessageProp;
  extendsInfoDropdown?: DropdownProps[];
}> = ({ formatMessage, onTracking, extendsInfoDropdown }) => {
  return (
    <HeaderDropdown
      overlay={
        <QuestionMenu
          formatMessage={formatMessage}
          onTracking={onTracking}
          extendsInfoDropdown={extendsInfoDropdown}
        />
      }
      placement="bottomRight"
    >
      <span className={styles.action}>
        <QuestionCircleOutlined />
      </span>
    </HeaderDropdown>
  );
};

export default InfoDropDwon;
