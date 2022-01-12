import { Menu } from 'antd';
import React from 'react';
import styles from './index.less';
import { MoreOutlined, HomeOutlined } from '@ant-design/icons';
import HeaderDropdown from './HeaderDropdown';
import { getSsoUrl } from '../utils/utils';
import type { ServiceProp, FormatMessageProp } from './index.types';

const ServiceMenu: React.FC<{
  services: ServiceProp[];
  formatMessage: FormatMessageProp;
  onTracking: (type: string) => void;
}> = ({ services, formatMessage, onTracking }) => {
  const appList = services.map((service) => {
    return {
      name: formatMessage({ id: `common.service.${service.serviceName}` }),
      url: service.externalDomain,
      onClick: service.onClick,
      serviceName: service.serviceName,
    };
  });
  return (
    <Menu className={styles.shadow} mode="inline">
      <Menu.Item
        icon={<HomeOutlined />}
        onClick={() => {
          onTracking('nav-home');
          window.location.assign(`${getSsoUrl()}`);
        }}
      >
        {formatMessage({ id: 'common.nav.home' })}
      </Menu.Item>
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
}> = ({ services, formatMessage, onTracking }) => {
  return (
    <HeaderDropdown
      overlay={
        <ServiceMenu services={services} formatMessage={formatMessage} onTracking={onTracking} />
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
