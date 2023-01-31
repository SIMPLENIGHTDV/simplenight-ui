export interface ColorStates {
  default: string;
  hover: string;
  focused: string;
  pressed: string;
  disabled: string;
  loading: string;
}

const getPrimaryColors = () => ({
  default: 'bg-primary-1000 border-transparent text-white',
  hover: 'hover:bg-primary-800 hover:text-white',
  disabled: 'bg-dark-300 border-transparent text-dark-700',
  focused: 'focus:bg-primary-800 focus:border-primary-600 focus:text-white',
  pressed: 'active:bg-primary-700 active:border-primary-800 active:text-white',
  loading: 'bg-primary-700 border-primary-800 text-transparent',
});

const getOutlinedColors = () => ({
  default: 'bg-white border-dark-1000 text-dark-1000',
  hover: 'hover:bg-dark-1000 hover:text-white',
  disabled: 'bg-dark-300 border-transparent text-dark-700',
  focused: 'focus:bg-dark-100 focus:border-dark-700 focus:text-dark-1000',
  pressed: 'active:bg-dark-300 active:border-dark-1000 active:text-dark-1000',
  loading: '!bg-dark-300 !border-transparent text-transparent',
});

const getDangerColors = (): ColorStates => ({
  default: 'bg-error-1000 border-transparent text-white',
  hover: 'hover:bg-error-800 hover:text-white',
  disabled: 'bg-dark-300 border-transparent text-dark-700',
  focused: 'focus:bg-error-1000 focus:border-error-700 focus:text-white',
  pressed: 'active:bg-error-800 active:border-error-700 active:text-white',
  loading: 'bg-error-800 text-white text-transparent',
});
const getNoBackgroundColors = (): ColorStates => ({
  default: 'border-transparent text-primary-1000',
  hover: 'hover:text-primary-800',
  disabled: 'border-transparent text-dark-700',
  focused: 'focus:text-primary-1000',
  pressed: 'active:text-primary-700',
  loading: 'border-transparent text-transparent',
});

const useColorButton = (type: string): ColorStates => {
  if (type === 'outlined') return getOutlinedColors();
  if (type === 'danger') return getDangerColors();
  if (type === 'no-background') return getNoBackgroundColors();
  return getPrimaryColors();
};

export default useColorButton;
