import React from 'react';
import classnames from 'classnames';
import useColorButton from '../../hooks';

interface IButton {
  children: React.ReactNode;
  type?: 'primary' | 'outlined' | 'danger';
  disabled?: boolean;
  height?: string;
  width?: string;
  onClick?: () => void;
}

const defaultProps = {
  type: 'primary',
  disabled: false,
  height: 'large',
  width: '',
  onClick: () => {},
};

const Button = ({
  children,
  type = 'primary',
  disabled,
  height,
  width,
  onClick,
}: IButton) => {
  const colors = useColorButton(type);

  let customHeight;
  switch (height) {
    case 'large':
      customHeight = 'h-11';
      break;
    case 'small':
      customHeight = 'h-8';
      break;
    default:
      customHeight = height;
      break;
  }

  return (
    <button
      type="button"
      className={classnames(
        `flex justify-center items-center gap-1 border rounded ${customHeight} ${width}`,
        {
          [`cursor-pointer ${colors.default} ${colors.hover} ${colors.focused} ${colors.pressed}`]:
            !disabled,
          [`cursor-not-allowed ${colors.disabled}`]: disabled,
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
