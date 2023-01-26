import React from 'react';
import useColorButton from '@/hooks';
import Loader from '../Loader/Loader';

export interface IButton {
  type?: 'primary' | 'outlined' | 'danger' | 'no-background';
  disabled?: boolean;
  size?: 'large'|'small';
  width?: string;
  onClick?: () => void;
  loading?: boolean;
  icon?:React.ReactElement
  children?:string;

}

const defaultProps = {
  type: 'primary',
  disabled: false,
  size: 'large',
  width: '',
  onClick: () => {},
  loading: false,
  children: '',
  icon: '',
};

const Button = ({
  children,
  icon,
  type = 'primary',
  disabled = false,
  size = 'large',

  onClick,
  loading = false,
}: IButton) => {
  const colors = useColorButton(type);
  const isLarge = size === 'large';
  const height = isLarge ? 'h-11' : 'h-8';

  /*  let customHeight;
  switch (size) {
    case 'large':
      customHeight = 'h-11';
      break;
    case 'small':
      customHeight = 'h-8';
      break;
    default:
      customHeight = height;
      break;
  } */

  const loaderProps = {
    primary: {
      circleColor: 'text-white opacity-25',
      spinnerColor: 'text-white',
    },
    danger: {
      circleColor: 'text-white opacity-25',
      spinnerColor: 'text-white',
    },
    outlined: {
      circleColor: 'text-black opacity-25',
      spinnerColor: 'text-black',
    },
    'no-background': {
      circleColor: 'text-primary opacity-25',
      spinnerColor: 'text-primary',
    },
  };

  return (
    <button
      type="button"
      className={`flex justify-center items-center gap-1 border rounded max-w-fit px-2 
      text-sm font-semibold leading-lg ${height}
      ${
    !disabled && !loading
      ? `cursor-pointer ${colors.default} ${colors.hover} ${colors.focused} ${colors.pressed}`
      : ''
    }
        ${disabled ? `cursor-not-allowed ${colors.disabled}` : ''}
        ${loading ? `cursor-not-allowed ${colors.loading}` : ''}
        `}
      onClick={onClick}
      disabled={disabled}
    >

      {loading && <Loader size="small" {...loaderProps[`${type}`]} /> }
      {!loading && icon && icon }
      {!loading && children && children}
    </button>
  );
};

/* className="text-sm font-semibold leading-lg" */

Button.defaultProps = defaultProps;

export default Button;
