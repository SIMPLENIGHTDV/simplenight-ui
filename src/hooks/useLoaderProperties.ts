import { LoaderProps } from '@/components/Loader/LoaderTypes';

type ButtonType = 'primary' | 'outlined' | 'danger' | 'no-background';

export const useLoaderColor = (type: ButtonType): LoaderProps => {
  const loaderProps = {
    primary: {
      circleColor: 'text-white opacity-25',
      spinnerColor: 'text-white',
    },
    outlined: {
      circleColor: 'text-black opacity-25',
      spinnerColor: 'text-black',
    },
    danger: {
      circleColor: 'text-white opacity-25',
      spinnerColor: 'text-white',
    },
    'no-background': {
      circleColor: 'text-primary-1000 opacity-25',
      spinnerColor: 'text-primary-1000',
    },
  };

  return loaderProps[type];
};

export const useLoaderSize = (
  size: 'large' | 'button-large' | 'button-small',
) => {
  const buttonSmallSpinnerProperties = {
    spinnerWidth: 18,
    spinnerHeight: 18,
    spinnerRadius: 8,
    spinnerStrokeWidth: 2,
    strokePath: 'M9.5 1C11.8004 1 13.8739 1.9709 15.3333 3.52527',
  };
  const buttonLargeSpinnerProperties = {
    spinnerWidth: 24,
    spinnerHeight: 24,
    spinnerRadius: 10,
    spinnerStrokeWidth: 4,
    strokePath: 'M12 2C14.8754 2 17.4674 3.21363 19.2917 5.15659',
  };

  const largeSpinnerProperties = {
    spinnerWidth: 80,
    spinnerHeight: 80,
    spinnerRadius: 36,
    spinnerStrokeWidth: 8,
    strokePath: 'M40 4C50.3516 4 59.6827 8.36906 66.25 15.3637',
  };

  if (size === 'large') return largeSpinnerProperties;
  if (size === 'button-large') return buttonLargeSpinnerProperties;
  return buttonSmallSpinnerProperties;
};
