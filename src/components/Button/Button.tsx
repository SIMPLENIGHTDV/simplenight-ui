import React from 'react';
import useColorButton from '@/hooks';
import Loader from '../Loader/Loader';
import { useLoaderColor } from '@/hooks/useLoaderProperties';
import IconWrapper from '../IconWrapper';

export interface IButton {
  type?: 'primary' | 'secondary' | 'outlined' | 'danger' | 'no-background';
  disabled?: boolean;
  size?: 'large' | 'small';
  onClick?: () => void;
  loading?: boolean;
  icon?: React.ReactElement;
  children?: string;
  fullWidth?: boolean;
  compact?: boolean;
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
  compact: false,
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
  compact = false,
}: IButton) => {
  const colors = useColorButton(type);
  const loaderColors = useLoaderColor(type);

  const isLarge = size === 'large';
  const height = isLarge ? 'h-11' : 'h-8';
  const isSquare = children === '';
  const padding = isSquare ? 'px-3' : 'px-6';
  const width = !isSquare ? `w-full ${!fullWidth && 'md:w-auto'}` : '';
  const iconSize = isLarge ? 24 : 16;
  const fontSize = isLarge ? 'text-base ' : 'text-xs';
  const loaderSize = isLarge ? 'button-large' : 'button-small';

  const activeClasses = `${colors.default} ${colors.hover} ${colors.focused} ${colors.pressed} cursor-pointer`;
  const disabledClasses = `cursor-not-allowed ${colors.disabled}`;
  const loadingClasses = `cursor-not-allowed ${colors.loading}`;

  return (
    <button
      type="button"
      className={`flex justify-center items-center gap-1 border rounded font-semibold leading-lg group
      ${fontSize} ${height} ${compact ? '' : padding} ${width}
      ${!disabled && !loading ? activeClasses : ''}
        ${disabled ? disabledClasses : ''}
        ${loading ? loadingClasses : ''}
        `}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && (
        <div className="absolute">
          <Loader size={loaderSize} {...loaderColors} />
        </div>
      )}
      {icon && <IconWrapper size={iconSize}>{icon}</IconWrapper>}
      {children && children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
