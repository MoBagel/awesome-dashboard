import React from 'react';
import { Menu } from 'antd';
import styles from './index.less';
import { QuestionCircleOutlined } from '@ant-design/icons';
import HeaderDropdown from './HeaderDropdown';
import type { FormatMessageProp, DropdownProps, infoHiddenListProp } from './index.types';

const QuestionMenu: React.FC<{
  onTracking: (type: string) => void;
  formatMessage: FormatMessageProp;
  extendsInfoDropdown?: DropdownProps[];
  infoHiddenList?: infoHiddenListProp[];
}> = ({ formatMessage, onTracking, extendsInfoDropdown = [], infoHiddenList = [] }) => {
  return (
    <Menu>
      {!infoHiddenList.includes('contact') && (
        <Menu.Item
          onClick={() => {
            onTracking('contact');
          }}
        >
          <a href="https://mobagel.com/tw/help/" target="_blank" rel="noopener noreferrer">
            {formatMessage({ id: 'common.nav.contact' })}
          </a>
        </Menu.Item>
      )}
      {extendsInfoDropdown.length > 0 &&
        extendsInfoDropdown.map(({ Icon, label, onClick }) => {
          return (
            <Menu.Item key={label} onClick={onClick}>
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
  infoHiddenList?: infoHiddenListProp[];
}> = ({ formatMessage, onTracking, extendsInfoDropdown = [], infoHiddenList = [] }) => {
  if (extendsInfoDropdown.length === 0 && infoHiddenList.includes('contact')) {
    return null;
  }
  return (
    <HeaderDropdown
      overlay={
        <QuestionMenu
          formatMessage={formatMessage}
          onTracking={onTracking}
          extendsInfoDropdown={extendsInfoDropdown}
          infoHiddenList={infoHiddenList}
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
