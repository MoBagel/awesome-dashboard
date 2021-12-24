import { Menu } from 'antd';
import React from 'react';
import styles from './index.less';
import { MoreOutlined, HomeOutlined } from '@ant-design/icons';
import HeaderDropdown from './HeaderDropdown';
import { getSsoUrl } from '../utils/utils';
import type { ServiceProp, FormatMessageProp } from './index.types';

const ServiceMenu: React.FC<{ services: ServiceProp[]; formatMessage: FormatMessageProp }> = ({
  services,
  formatMessage
}) => {
  const appList = services.map((service) => {
    return {
      name: formatMessage({ id: `common.service.${service.serviceName}` }),
      url: service.externalDomain
    };
  });
  return (
    <Menu className={styles.shadow} mode='inline'>
      <Menu.Item
        icon={<HomeOutlined />}
        onClick={() => {
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
              window.open(app.url);
            }}
          >
            {app.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

const ExplorationDropdown: React.FC<{ services: ServiceProp[]; formatMessage: FormatMessageProp }> = ({
  services,
  formatMessage
}) => {
  return (
    <HeaderDropdown overlay={<ServiceMenu services={services} formatMessage={formatMessage} />} placement='bottomRight'>
      <span className={styles.action}>
        <MoreOutlined />
      </span>
    </HeaderDropdown>
  );
};

export default ExplorationDropdown;
