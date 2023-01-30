type ButtonType = 'primary' | 'outlined' | 'danger' | 'no-background';

interface LoaderProps {
  circleColor: string;
  spinnerColor: string;
}

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

export const useLoaderSize = (size:'large'|'small') => {
  const smallSpinnerProperties = { spinnerWidth: 24,
    spinnerHeight: 24,
    spinnerRadius: 10,
    spinnerStrokeWidth: 4,
    strokePath: 'M12 2C14.8754 2 17.4674 3.21363 19.2917 5.15659' };

  const largeSpinnerProperties = {
    spinnerWidth: 80,
    spinnerHeight: 80,
    spinnerRadius: 36,
    spinnerStrokeWidth: 8,
    strokePath: 'M40 4C50.3516 4 59.6827 8.36906 66.25 15.3637',
  };

  const isLarge = size === 'large';
  if (isLarge) return largeSpinnerProperties;
  return smallSpinnerProperties;
};
