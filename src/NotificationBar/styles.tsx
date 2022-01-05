import styled from 'styled-components';
import { Button } from 'antd';

import { InfoCircleOutlined, CloseOutlined } from '@ant-design/icons';

export const ContentConatainer = styled.div`
  padding-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const StyledButton = styled(Button)`
  border-radius: 0;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 0px;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

export const NotificationContainer = styled.div`
  padding: 0 16px;
  min-height: 60px;
  display: flex;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  overflow: hidden;
  ${(props: { styles: string }) => (props.styles ? props.styles : '')};
`;

export const NoticationTextContainer = styled.div`
  display: flex;
  padding: 0 32px;
  flex: 1 1 auto;
  overflow: hidden;
  > .ant-typography {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const NoticationBtnContainer = styled.div`
  display: flex;
  align-items: center;
  & button {
    height: 36px;
    margin-right: 16px;
  }
  & .ant-btn-link {
    margin-right: 0;
  }
`;

export const StyledInfoCircleOutlined = styled(InfoCircleOutlined)`
  margin-left: 8px;
`;

export const StyledCloseOutlined = styled(CloseOutlined)``;
