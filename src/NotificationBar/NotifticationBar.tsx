import React from 'react';

import { Typography, Button } from 'antd';
import type { ButtonProps } from 'antd';

import {
  NotificationContainer,
  NoticationTextContainer,
  NoticationBtnContainer,
  StyledButton,
  StyledInfoCircleOutlined,
  StyledCloseOutlined,
} from './styles';

const { Text } = Typography;

export interface NotificationBarProps {
  elemRef?: HTMLDivElement | null;
  onCloseBanner: () => void;
  message: string;
  cancelButtonLabel: string;
  cancelButtonProp?: ButtonProps;
  confirmButtonLabel: string;
  confirmButtonProp?: ButtonProps;
  isShowWarningIcon?: boolean;
  isShowCloseButton?: boolean;
  styles?: string;
}

export const NotificationBar: React.FC<NotificationBarProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCloseBanner = () => {},
  elemRef,
  message,
  cancelButtonLabel,
  cancelButtonProp,
  confirmButtonLabel,
  confirmButtonProp,
  isShowWarningIcon = true,
  isShowCloseButton = true,
  styles,
}) => {
  return (
    <NotificationContainer ref={elemRef} className="notification-container" styles={styles}>
      {isShowWarningIcon && <StyledInfoCircleOutlined />}
      <NoticationTextContainer className="message-container">
        <Text>{message}</Text>
      </NoticationTextContainer>
      <NoticationBtnContainer className="button-container">
        {Boolean(cancelButtonLabel) && (
          <StyledButton {...cancelButtonProp} className="cancel-btn">
            {cancelButtonLabel}
          </StyledButton>
        )}
        {Boolean(confirmButtonLabel) && (
          <StyledButton type="primary" {...confirmButtonProp} className="confirm-btn">
            {confirmButtonLabel}
          </StyledButton>
        )}
        {isShowCloseButton && (
          <Button onClick={onCloseBanner} type="link" shape="circle" className="close-btn">
            <StyledCloseOutlined />
          </Button>
        )}
      </NoticationBtnContainer>
    </NotificationContainer>
  );
};
