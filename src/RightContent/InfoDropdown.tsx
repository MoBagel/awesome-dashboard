import React from 'react';
import { Menu } from 'antd';
import styles from './index.less';
import { QuestionCircleOutlined } from '@ant-design/icons';
import HeaderDropdown from './HeaderDropdown';

const QuestionMenu = ({ formatMessage, onTracking }) => {
  return (
    <Menu>
      <Menu.Item
        onClick={() => {
          onTracking('contact');
          window.open('https://www.8ndpoint.com/contact');
        }}>
        {formatMessage({ id: 'common.nav.contact' })}
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          onTracking('faq');
          window.open('https://www.8ndpoint.com/faq');
        }}>
        {formatMessage({ id: 'common.nav.faq' })}
      </Menu.Item>
    </Menu>
  );
};

const InfoDropDwon = ({ formatMessage, onTracking }) => {
  return (
    <HeaderDropdown
      overlay={<QuestionMenu formatMessage={formatMessage} onTracking={onTracking} />}
      placement='bottomRight'>
      <span className={styles.action}>
        <QuestionCircleOutlined />
      </span>
    </HeaderDropdown>
  );
};

export default InfoDropDwon;
