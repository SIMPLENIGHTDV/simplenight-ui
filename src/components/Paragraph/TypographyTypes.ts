type ColorName = 'primary' | 'dark' | 'green';

type ColorVariant =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '1000';

type ColorWithVariant = `${ColorName}-${ColorVariant}`;

type ColorWithoutVariant = 'white' | 'transparent';

export type TextColor = `text-${ColorWithVariant | ColorWithoutVariant}`;

export interface ParagraphProps {
  fontWeight: 'normal' | 'medium' | 'semibold';
  size: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
  children: string;
  className?: string;
  textColor?: TextColor;
}

export const paragraphClasses = {
  large: 'text-p-lg',
  medium: 'text-p-md',
  small: 'text-p-sm',
  xsmall: 'text-p-xs',
  xxsmall: 'text-p-xxs',
};
