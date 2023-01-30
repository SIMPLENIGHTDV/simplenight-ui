import React from 'react';
import useColorButton from '@/hooks';
import Loader from '../Loader/Loader';
import { useLoaderColor } from '@/hooks/useLoaderProperties';

export interface IButton {
  type?: 'primary' | 'outlined' | 'danger' | 'no-background';
  disabled?: boolean;
  size?: 'large' | 'small';
  onClick?: () => void;
  loading?: boolean;
  icon?: React.ReactElement;
  children?: string;
  fullWidth?: boolean;
}

const defaultProps = {
  type: 'primary',
  disabled: false,
  size: 'large',
  onClick: () => {},
  loading: false,
  children: '',
  icon: '',
  fullWidth: false,
};

const Button = ({
  children,
  icon,
  type = 'primary',
  disabled = false,
  size = 'large',
  fullWidth = false,
  onClick,
  loading = false,
}: IButton) => {
  const colors = useColorButton(type);
  const loaderColors = useLoaderColor(type);
  const isLarge = size === 'large';
  const height = isLarge ? 'h-11' : 'h-8';
  const hasText = children !== '';
  const padding = hasText ? 'px-6' : 'px-3';
  const activeColorClasses = `${colors.default} ${colors.hover} ${colors.focused} ${colors.pressed}`;

  return (
    <button
      type="button"
      className={`flex justify-center items-center gap-1 border rounded 
      text-sm font-semibold leading-lg ${height} ${padding} 
      w-full ${fullWidth ? 'md:w-full' : 'md:w-auto'}
      ${!disabled && !loading ? `cursor-pointer ${activeColorClasses}` : ''}
        ${disabled ? `cursor-not-allowed ${colors.disabled}` : ''}
        ${loading ? `cursor-not-allowed ${colors.loading}` : ''}
        `}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && (
        <div className="absolute">
          <Loader size="small" {...loaderColors} />
        </div>
      )}
      {icon && icon}
      {children && children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
