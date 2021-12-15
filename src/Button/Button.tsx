import React from 'react';
import cx from 'classnames';
import './styles.less';

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  text?: string;
}

export const Button: React.FC<IButtonProps> = ({ onClick, disabled, className, text }) => (
  <button type="button" className={cx('button', className)} onClick={onClick} disabled={disabled}>
    {text}
  </button>
);
