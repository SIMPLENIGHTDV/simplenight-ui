type ColorName = 'primary' | 'dark' | 'green' | 'error' | 'warning';

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

export type BackgroundColor = `bg-${ColorWithVariant | ColorWithoutVariant}`;
