import { Menu } from 'antd';
import React from 'react';
import styles from './index.less';
import { MoreOutlined, HomeOutlined } from '@ant-design/icons';
import HeaderDropdown from './HeaderDropdown';
import { getSsoUrl } from '../utils/utils';
import type { ServiceProp, FormatMessageProp, exploreHiddenListProp } from './index.types';

const ServiceMenu: React.FC<{
  services: ServiceProp[];
  formatMessage: FormatMessageProp;
  onTracking: (type: string) => void;
  exploreHiddenList?: exploreHiddenListProp[];
}> = ({ services, formatMessage, onTracking, exploreHiddenList = [] }) => {
  const appList = services.map((service) => {
    return {
      name: formatMessage({ id: `common.service.${service.serviceName}` }),
      url: service.externalDomain,
      onClick: service.onClick,
      serviceName: service.serviceName,
      Icon: service.Icon,
    };
  });
  return (
    <Menu className={styles.shadow} mode="inline">
      {!exploreHiddenList.includes('home') && (
        <Menu.Item
          icon={<HomeOutlined />}
          onClick={() => {
            onTracking('nav-home');
            window.location.assign(`${getSsoUrl()}`);
          }}
        >
          {formatMessage({ id: 'common.nav.home' })}
        </Menu.Item>
      )}
      {appList.map((app) => {
        return (
          <Menu.Item
            key={app.name}
            onClick={() => {
              onTracking(`nav-${app.serviceName}`);
              if (typeof app.onClick === 'function') {
                app.onClick();
              } else {
                window.open(app.url);
              }
            }}
          >
            {app.Icon}
            {app.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

const ExplorationDropdown: React.FC<{
  services: ServiceProp[];
  formatMessage: FormatMessageProp;
  onTracking: (type: string) => void;
  exploreHiddenList?: exploreHiddenListProp[];
}> = ({ services = [], formatMessage, onTracking, exploreHiddenList = [] }) => {
  if (services.length === 0 && exploreHiddenList.includes('home')) {
    return null;
  }
  return (
    <HeaderDropdown
      overlay={
        <ServiceMenu
          exploreHiddenList={exploreHiddenList}
          services={services}
          formatMessage={formatMessage}
          onTracking={onTracking}
        />
      }
      placement="bottomRight"
    >
      <span className={styles.action}>
        <MoreOutlined />
      </span>
    </HeaderDropdown>
  );
};

export default ExplorationDropdown;
